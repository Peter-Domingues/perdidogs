"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeSexo } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";

const StyledButton = styled(Button)`
  background-color: #6dc4bf;
  padding: 50px;
  margin: 20px;
  &:hover {
    background-color: #6dc4bf96;
  }
`;

const Sexo = () => {
  const dispatch = useDispatch();
  const especie = useSelector((state) => state.form.especie);

  const onChangeSexo = (sexo) => {
    dispatch(changeSexo(sexo));
    if (especie == "gato") {
      dispatch(increment());
      dispatch(increment());
      dispatch(increment());
      return;
    }
    dispatch(increment());
  };

  return (
    <div>
      <h1>Qual o sexo?</h1>
      <StyledButton variant="contained" onClick={() => onChangeSexo("Macho")}>
        Macho
      </StyledButton>
      <StyledButton variant="contained" onClick={() => onChangeSexo("Femea")}>
        Fêmea
      </StyledButton>
    </div>
  );
};

export default Sexo;
