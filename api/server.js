const express = require("express");
const cors = require('cors');
require("dotenv").config();

const inundogsController = require("./controllers/inundogs.controller");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/inundogs", (req, res) => {
  inundogsController.getInundogs().then((data) => res.json(data));
});

app.get("/api/inundogs", (req, res) => {
  const filtro = {};

  if(req.query.raca) filtro.raca = req.query.raca;
  if(req.query.porte) filtro.porte = req.query.porte;
  if(req.query.sexo) filtro.sexo = req.query.sexo;
  if(req.query.especie) filtro.especie = req.query.especie;
  if(req.query.cidade) filtro.cidade = req.query.cidade;
  if(req.query.comportamento) filtro.comportamento = req.query.comportamento;
  if(req.query.faixaEtaria) filtro.faixaEtaria = req.query.faixaEtaria;

  inundogsController.getFilteredInundogs(filtro).then((data) => res.json(data));
});

app.post("/api/inundog", (req, res) => {
  console.log(req.body);
  inundogsController
    .createInundog(req.body)
    .then((data) => res.json(data));
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

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Inundogs</h1>`);
});

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
