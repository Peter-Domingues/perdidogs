import { createSlice } from "@reduxjs/toolkit";
const initialState = {
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
  foto: null,
  imageTemp: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,

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
    changeFoto: (state, action) => {
      state.foto = action.payload;
    },
    changeImageTemp: (state, action) => {
      state.imageTemp = action.payload;
    },
    clearStates: () => initialState,
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
  changeFoto,
  changeImageTemp,
  clearStates,
} = formSlice.actions;
export default formSlice.reducer;
