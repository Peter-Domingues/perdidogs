"use client";

import { changeSaude } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledTextField, SendButton } from "./pages.styles";

const Saude = () => {
  const dispatch = useDispatch();
  const saude = useSelector((state) => state.form.saude);

  const [tempSaude, setTempSaude] = useState(saude);

  const onChangeSaude = (saude) => {
    setTempSaude(saude);
  };

  const handleSend = () => {
    dispatch(changeSaude(tempSaude));
    dispatch(increment());
  };

  return (
    <div className="form-text-questions-div">
      <StyledTextField
        value={tempSaude}
        label="Detalhes sobre saúde"
        onChange={(e) => onChangeSaude(e.target.value)}
        multiline
        rows={4}
      />
      <SendButton onClick={handleSend} disabled={!tempSaude}>
        Enviar
      </SendButton>
    </div>
  );
};

export default Saude;
