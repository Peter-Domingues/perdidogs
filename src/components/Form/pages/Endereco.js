"use client";

import { changeEndereco } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SendButton, StyledTextField } from "./pages.styles";
import startCase from "lodash/startCase";

const Endereco = () => {
  const dispatch = useDispatch();
  const endereco = useSelector((state) => state.form.endereco);

  const [tempEndereco, setTempEndereco] = useState(endereco);

  const onChangeEndereco = (endereco) => {
    setTempEndereco(endereco);
  };

  const normalizeAddress = (address) => {
    const trimmedAddress = address.trim();

    return trimmedAddress
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const handleSend = () => {
    const newAddress = startCase(normalizeAddress(tempEndereco));

    dispatch(changeEndereco(newAddress));
    dispatch(increment());
  };

  return (
    <div className="form-text-questions-div space-top">
      <StyledTextField
        value={tempEndereco}
        label="Endereço"
        helperText="Pode ser um local. Ex. Galpão da Ulbra"
        onChange={(e) => onChangeEndereco(e.target.value)}
      />
      <SendButton onClick={handleSend} disabled={!tempEndereco}>
        Enviar
      </SendButton>
    </div>
  );
};

export default Endereco;
