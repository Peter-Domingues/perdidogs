const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const next = require("next");

require("dotenv").config();

const inundogsController = require("./controllers/inundogs.controller");
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images/");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

  const upload = multer({ storage: storage });

  const app = express();
  const port = process.env.PORT || 3000;

  app.use(cors());
  app.use(express.json());

  app.post("/api/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
      return res.status(400).send("Nenhum arquivo enviado.");
    }

    res.send(`images/${req.file.path.split("\\")[2]}`);
  });

  app.get("/api/inundogs", (req, res) => {
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

  app.post("/api/inundog", async (req, res) => {
    inundogsController.createInundog(req.body).then((data) => res.json(data));
  });

  app.put("/api/inundog/:id", (req, res) => {
    inundogsController
      .updateInundog({ _id: req.params.id }, req.body)
      .then((data) => res.json(data));
  });

  app.delete("/api/inundog/:id", (req, res) => {
    inundogsController
      .deleteInundog(req.params.id)
      .then((data) => res.json(data));
  });

  app.get("/api", (req, res) => {
    res.send(`<h1>Welcome to Inundogs</h1>`);
  });

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
  });
});
