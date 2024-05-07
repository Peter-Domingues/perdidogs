"use client";

import { changeEndereco } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

const Endereco = () => {
  const dispatch = useDispatch();

  const onChangeEndereco = (endereco) => {
    console.log(endereco);
    dispatch(changeEndereco(endereco));
  };

  const handleSend = () => {
    dispatch(increment());
  };

  return (
    <div>
      <TextField onChange={(e) => onChangeEndereco(e.target.value)} />
      <Button onClick={handleSend}> Enviar</Button>
    </div>
  );
};

export default Endereco;
