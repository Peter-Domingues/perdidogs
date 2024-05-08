"use client";

import { changeCor } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledTextField, SendButton } from "./pages.styles";

const Cor = () => {
  const dispatch = useDispatch();
  const cor = useSelector((state) => state.form.cor);

  const [tempCor, setTempCor] = useState(cor);

  const onChangeCor = (cor) => {
    setTempCor(cor);
  };

  const handleSend = () => {
    dispatch(changeCor(tempCor));

    dispatch(increment());
  };

  return (
    <div className="form-text-questions-div space-top">
      <StyledTextField
        value={tempCor}
        label="Cor do animal"
        onChange={(e) => onChangeCor(e.target.value)}
      />
      <SendButton onClick={handleSend} disabled={!tempCor}>
        Enviar
      </SendButton>
    </div>
  );
};

export default Cor;
