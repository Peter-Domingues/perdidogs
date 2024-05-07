import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    especie: "",
    sexo: "",
    porte: "",
    raca: "",
    cidade: "",
    endereco: "",
    observacao: "",
    comportamento: "",
    castrado: "",
    saudavel: "",
    faixaEtaria: "",
    cor: "",
    contato: {
      responsavel: "",
      telefone: "",
    },
  },

  reducers: {
    changeEspecie: (state, action) => {
      state.especie = action.payload;
    },
    changeSexo: (state, action) => {
      state.sexo = action.payload;
    },
    changePorte: (state, action) => {
      state.porte = action.payload;
    },
    changeRaca: (state, action) => {
      state.raca = action.payload;
    },
    changeFaixaEtaria: (state, action) => {
      state.faixaEtaria = action.payload;
    },
    changeComportamento: (state, action) => {
      state.comportamento = action.payload;
    },
    changeCastrado: (state, action) => {
      state.castrado = action.payload;
    },
    changeSaude: (state, action) => {
      state.saude = action.payload;
    },
    changeCor: (state, action) => {
      state.cor = action.payload;
    },
    changeCidade: (state, action) => {
      state.cidade = action.payload;
    },
    changeEndereco: (state, action) => {
      state.endereco = action.payload;
    },
    changeObservacao: (state, action) => {
      state.observacao = action.payload;
    },
    changeContato: (state, action) => {
      state.contato = action.payload;
    },
  },
});

export const {
  changeEspecie,
  changeSexo,
  changePorte,
  changeRaca,
  changeComportamento,
  changeCastrado,
  changeSaude,
  changeCidade,
  changeEndereco,
  changeObservacao,
  changeFaixaEtaria,
  changeCor,
  changeContato,
} = formSlice.actions;
export default formSlice.reducer;
