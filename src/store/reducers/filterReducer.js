import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  especie: "",
  sexo: "",
  porte: "",
  raca: "",
  cidade: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,

  reducers: {
    changeFilterEspecie: (state, action) => {
      state.especie = action.payload;
    },
    changeFilterSexo: (state, action) => {
      state.sexo = action.payload;
    },
    changeFilterPorte: (state, action) => {
      state.porte = action.payload;
    },
    changeFilterRaca: (state, action) => {
      state.raca = action.payload;
    },
    changeFilterCidade: (state, action) => {
      state.cidade = action.payload;
    },
    clearStates: () => initialState,
  },
});

export const {
  changeFilterEspecie,
  changeFilterSexo,
  changeFilterPorte,
  changeFilterRaca,
  changeFilterCidade,
  clearStates,
} = filtersSlice.actions;
export default filtersSlice.reducer;
