const mongoose = require("mongoose");

const contatoSchema = new mongoose.Schema({
  responsavel: "string",
  telefone: "string",
});

const inundogsSchema = new mongoose.Schema({
  raca: "string",
  foto: "string",
  endereco: "string",
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

const Inundogs = mongoose.model("inundogs", inundogsSchema);

module.exports = {
  Inundogs,
};
