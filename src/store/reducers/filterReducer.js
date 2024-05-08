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
    clearFilters: () => initialState,
  },
});

export const {
  changeFilterEspecie,
  changeFilterSexo,
  changeFilterPorte,
  changeFilterRaca,
  changeFilterCidade,
  clearFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
