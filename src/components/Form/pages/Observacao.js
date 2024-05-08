"use client";

import { changeObservacao } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledTextField, SendButton } from "./pages.styles";

const Observacao = () => {
  const dispatch = useDispatch();
  const observacao = useSelector((state) => state.form.observacao);

  const [tempObservacao, setTempObservacao] = useState(observacao);

  const onChangeObservacao = (observacao) => {
    setTempObservacao(observacao);
  };

  const handleSend = () => {
    dispatch(changeObservacao(tempObservacao));

    dispatch(increment());
  };

  return (
    <div className="form-text-questions-div space-top">
      <StyledTextField
        value={tempObservacao}
        onChange={(e) => onChangeObservacao(e.target.value)}
        multiline
        rows={4}
      />
      <SendButton onClick={handleSend} disabled={!tempObservacao}>
        Enviar
      </SendButton>
    </div>
  );
};

export default Observacao;
