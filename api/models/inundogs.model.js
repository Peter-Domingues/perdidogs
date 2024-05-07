const mongoose = require("mongoose");

const inundogsSchema = new mongoose.Schema({
  raca: "string",
  foto: "Buffer",
  endereco: "string",
  porte: "string",
  sexo: "string",
  especie: "string",
  observacao: "string",
  cidade: "string",
  comportamento: "string",
  castrado: "string",
  saude: "string",
  cor: "string",
  responsavel: "string",
  telefone: "string",
});

const Inundogs = mongoose.model("inundogs", inundogsSchema);

module.exports = {
  Inundogs,
};
