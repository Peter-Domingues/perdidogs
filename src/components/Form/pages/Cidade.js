"use client";

import { changeCidade } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { Autocomplete, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

const Cidade = () => {
  const dispatch = useDispatch();

  const onChangeCidade = (e, raca) => {
    dispatch(changeCidade(raca));
    dispatch(increment());
  };

  const cidades = [
    "Alvorada",
    "Cachoeirinha",
    "Canoas",
    "Eldorado do Sul",
    "Gravataí",
    "Guaíba",
    "Novo Hamburgo",
    "Porto Alegre",
    "São Leopoldo",
    "Viamão",
  ];

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cidades}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Cidade" />}
        onChange={onChangeCidade}
      />
    </div>
  );
};

export default Cidade;
