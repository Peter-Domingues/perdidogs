"use client";

import { changeObservacao } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

const Observacao = () => {
  const dispatch = useDispatch();

  const onChangeObservacao = (observacao) => {
    console.log(Observacao);
    dispatch(changeObservacao(observacao));
  };

  const handleSend = () => {
    dispatch(increment());
  };

  return (
    <div>
      <TextField onChange={(e) => onChangeObservacao(e.target.value)} />
      <Button onClick={handleSend}> Enviar</Button>
    </div>
  );
};

export default Observacao;
