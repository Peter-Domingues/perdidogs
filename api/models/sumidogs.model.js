const mongoose = require("mongoose");

const contatoSchema = new mongoose.Schema({
  tutor: "string",
  telefone: "string",
});

const sumidogsSchema = new mongoose.Schema({
  raca: "string",
  foto: "string",
  porte: "string",
  faixaEtaria: "string",
  sexo: "string",
  especie: "string",
  observacao: "string",
  cidade: "string",
  comportamento: "string",
  castrado: "string",
  saude: "string",
  cor: "string",
  contato: contatoSchema,
  createdAt: { type: Date, default: Date.now },
});

const Sumidogs = mongoose.model("sumidogs", sumidogsSchema);

module.exports = {
  Sumidogs,
};
