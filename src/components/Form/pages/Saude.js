"use client";

import { changeSaude } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

const Saude = () => {
  const dispatch = useDispatch();

  const onChangeSaude = (saude) => {
    console.log(Saude);
    dispatch(changeSaude(saude));
  };

  const handleSend = () => {
    dispatch(increment());
  };

  return (
    <div>
      <TextField onChange={(e) => onChangeSaude(e.target.value)} />
      <Button onClick={handleSend}> Enviar</Button>
    </div>
  );
};

export default Saude;
