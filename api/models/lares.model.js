const mongoose = require("mongoose");

const capacidadeSchema = new mongoose.Schema({
  especie: "string",
  vagas: "string",
});

const contatoSchema = new mongoose.Schema({
  nome: "string",
  email: "string",
  telefone: "string",
});

const laresSchema = new mongoose.Schema({
  capacidade: [capacidadeSchema],
  sexo: "string",
  porte: "string",
  transporte: "string",
  observacao: "string",
  contato: contatoSchema,
  createdAt: { type: Date, default: Date.now },
});

const Lares = mongoose.model("lares", laresSchema);

module.exports = {
  Lares,
};
