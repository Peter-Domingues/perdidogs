"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeEspecie } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";

const StyledButton = styled(Button)`
  background-color: #6dc4bf;
  padding: 50px;
  margin: 20px;
  &:hover {
    background-color: #6dc4bf96;
  }
`;

const Especie = () => {
  const dispatch = useDispatch();

  const onChangeEspecie = (especie) => {
    dispatch(changeEspecie(especie));
    dispatch(increment());
  };

  return (
    <div>
      <StyledButton
        variant="contained"
        onClick={() => onChangeEspecie("cachorro")}
      >
        <Image width={100} height={100} src="/images/cao.png" />
      </StyledButton>
      <StyledButton variant="contained" onClick={() => onChangeEspecie("gato")}>
        <Image width={100} height={100} src="/images/gato.png" />
      </StyledButton>
    </div>
  );
};

export default Especie;
