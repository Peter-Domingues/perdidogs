"use client";
import { changeFaixaEtaria } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: #6dc4bf;
  padding: 50px;
  margin: 20px;
  &:hover {
    background-color: #6dc4bf96;
  }
`;

const FaixaEtaria = () => {
  const dispatch = useDispatch();

  const onChangeFaixaEtaria = (FaixaEtaria) => {
    dispatch(changeFaixaEtaria(FaixaEtaria));
    dispatch(increment());
  };

  return (
    <div>
      <StyledButton
        variant="contained"
        onClick={() => onChangeFaixaEtaria("Dócil")}
      >
        Filhote
      </StyledButton>
      <StyledButton
        variant="contained"
        onClick={() => onChangeFaixaEtaria("Bravo")}
      >
        Adulto
      </StyledButton>
      <StyledButton
        variant="contained"
        onClick={() => onChangeFaixaEtaria("Bravo")}
      >
        Idoso
      </StyledButton>
      <StyledButton
        variant="contained"
        onClick={() => onChangeFaixaEtaria("Bravo")}
      >
        Não sei
      </StyledButton>
    </div>
  );
};

export default FaixaEtaria;
