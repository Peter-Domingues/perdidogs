"use client";

import { cidades } from "@/data/options";
import { changeCidade } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { StyledAutoComplete } from "./pages.styles";

const Cidade = () => {
  const dispatch = useDispatch();
  const cidade = useSelector((state) => state.form.cidade);

  const onChangeCidade = (e, cidade) => {
    dispatch(changeCidade(cidade));
    dispatch(increment());
  };

  return (
    <div className="form-questions-buttons-div space-top">
      <StyledAutoComplete
        disablePortal
        value={cidade}
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
