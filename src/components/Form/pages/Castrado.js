"use client";
import { changeCastrado } from "@/store/reducers/formReducer";
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

const Castrado = () => {
  const dispatch = useDispatch();

  const onChangeCastrado = (castrado) => {
    dispatch(changeCastrado(castrado));
    dispatch(increment());
  };

  return (
    <div>
      <StyledButton variant="contained" onClick={() => onChangeCastrado("Sim")}>
        Sim
      </StyledButton>
      <StyledButton variant="contained" onClick={() => onChangeCastrado("Não")}>
        Não
      </StyledButton>
      <StyledButton
        variant="contained"
        onClick={() => onChangeCastrado("Não sei")}
      >
        Não sei
      </StyledButton>
    </div>
  );
};

export default Castrado;
