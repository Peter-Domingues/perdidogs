"use client";

import { changeCor } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

const Cor = () => {
  const dispatch = useDispatch();

  const onChangeCor = (cor) => {
    dispatch(changeCor(cor));
  };

  const handleSend = () => {
    dispatch(increment());
  };

  return (
    <div>
      <TextField onChange={(e) => onChangeCor(e.target.value)} />
      <Button onClick={handleSend}> Enviar</Button>
    </div>
  );
};

export default Cor;
