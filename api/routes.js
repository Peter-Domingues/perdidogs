const express = require("express");
const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

const inundogsController = require("./controllers/inundogs.controller");

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-2",
})

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "perdidogs-bucket",
        acl: "public-read",
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + "-" + file.originalname);
        }
    })
});

const router = express.Router();

router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("Nenhum arquivo enviado.");
  }

  res.send(req.file.location);
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

  inundogsController
    .getFilteredInundogs(filtro, page, limit)
    .then((data) => res.json(data));
});

router.post("/inundog", async (req, res) => {
  inundogsController.createInundog(req.body).then((data) => res.json(data));
});

router.put("/inundog/:id", (req, res) => {
  inundogsController
    .updateInundog({ _id: req.params.id }, req.body)
    .then((data) => res.json(data));
});

router.delete("/inundog/:id", (req, res) => {
  inundogsController
    .deleteInundog(req.params.id)
    .then((data) => res.json(data));
});

module.exports = router;
