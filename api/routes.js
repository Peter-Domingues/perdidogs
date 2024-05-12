const express = require("express");
const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const sharp = require("sharp");

const inundogsController = require("./controllers/inundogs.controller");
const laresController = require("./controllers/lares.controller");
const sumidogsController = require("./controllers/sumidogs.controller");

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-2",
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "perdidogs-bucket",
    acl: "public-read",
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

const router = express.Router();

async function compressImage(buffer, quality, minSize) {
  if (buffer.length <= minSize) {
    return buffer; // Skip compression if the image is already below the threshold
  }

  try {
    return await sharp(buffer).jpeg({ quality }).toBuffer();
  } catch (error) {
    console.error("Error compressing image:", error);
    throw error;
  }
}

router.post("/upload", upload.single("image"), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send("Nenhum arquivo enviado.");
  }

  try {
    const params = {
      Bucket: file.bucket,
      Key: file.key,
    };
    const { Body } = await s3.getObject(params).promise();

    const minSizeThreshold = 150 * 1024;
    console.log(Body.length);

    const changeQuality = () => {
      switch (true) {
        case Body.length > 2 * 1024 * 1024:
          return 20;
        case Body.length > 1 * 1024 * 1024:
          return 30;
        case Body.length > 900 * 1024:
          return 50;
        default:
          return 70;
      }
    };

    const compressedImageBuffer = await compressImage(
      Body,
      changeQuality(),
      minSizeThreshold
    );

    const compressedParams = {
      Bucket: file.bucket,
      Key: `compressed/${file.key}`,
      Body: compressedImageBuffer,
      ACL: "public-read",
      ContentType: "image/jpeg",
    };
    const uploadResult = await s3.upload(compressedParams).promise();

    res.send(uploadResult.Location);
  } catch (error) {
    console.error("Error processing image upload:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/inundogs", (req, res) => {
  const filtro = {};
  const { page = 1, limit = 6 } = req.query;

  if (req.query.raca) filtro.raca = req.query.raca;
  if (req.query.porte) filtro.porte = req.query.porte;
  if (req.query.sexo) filtro.sexo = req.query.sexo;
  if (req.query.especie) filtro.especie = req.query.especie;
  if (req.query.cidade) filtro.cidade = req.query.cidade;
  if (req.query.comportamento) filtro.comportamento = req.query.comportamento;
  if (req.query.faixaEtaria) filtro.faixaEtaria = req.query.faixaEtaria;
  if (req.query.endereco) filtro.endereco = req.query.endereco;

  inundogsController
    .getFilteredInundogs(filtro, page, limit)
    .then((data) => res.json(data));
});

router.get("/enderecos-unicos", async (req, res) => {
  inundogsController.getEnderecoList().then((data) => res.json(data));
});

router.get("/lares", (req, res) => {
  const filtro = {};
  const { page = 1, limit = 6 } = req.query;

  if (req.query.porte) filtro.porte = req.query.porte;
  if (req.query.sexo) filtro.sexo = req.query.sexo;
  if (req.query.cidade) filtro.cidade = req.query.cidade;
  if (req.query.transporte) filtro.transporte = req.query.transporte;
  if (req.query.especie) filtro["capacidade.especie"] = req.query.especie;

  laresController
    .getFilteredLares(filtro, page, limit)
    .then((data) => res.json(data));
});

router.get("/sumidogs", (req, res) => {
  const filtro = {};
  const { page = 1, limit = 6 } = req.query;

  if (req.query.raca) filtro.raca = req.query.raca;
  if (req.query.porte) filtro.porte = req.query.porte;
  if (req.query.sexo) filtro.sexo = req.query.sexo;
  if (req.query.especie) filtro.especie = req.query.especie;
  if (req.query.cidade) filtro.cidade = req.query.cidade;
  if (req.query.comportamento) filtro.comportamento = req.query.comportamento;
  if (req.query.faixaEtaria) filtro.faixaEtaria = req.query.faixaEtaria;

  sumidogsController
    .getFilteredSumidogs(filtro, page, limit)
    .then((data) => res.json(data));
});

router.post("/inundog", async (req, res) => {
  inundogsController.createInundog(req.body).then((data) => res.json(data));
});

router.post("/lar", async (req, res) => {
  laresController.createLar(req.body).then((data) => res.json(data));
});

router.post("/sumidog", async (req, res) => {
  sumidogsController.createSumidog(req.body).then((data) => res.json(data));
});

router.put("/inundog/:id", (req, res) => {
  inundogsController
    .updateInundog({ _id: req.params.id }, req.body)
    .then((data) => res.json(data));
});

router.put("/lar/:id", (req, res) => {
  laresController
    .updateLar({ _id: req.params.id }, req.body)
    .then((data) => res.json(data));
});

router.put("/sumidog/:id", (req, res) => {
  sumidogsController
    .updateSumidog({ _id: req.params.id }, req.body)
    .then((data) => res.json(data));
});

router.delete("/inundog/:id", (req, res) => {
  inundogsController
    .deleteInundog(req.params.id)
    .then((data) => res.json(data));
});

router.delete("/lar/:id", (req, res) => {
  laresController.deleteLar(req.params.id).then((data) => res.json(data));
});

router.delete("/sumidog/:id", (req, res) => {
  sumidogsController
    .deleteSumidog(req.params.id)
    .then((data) => res.json(data));
});

module.exports = router;
