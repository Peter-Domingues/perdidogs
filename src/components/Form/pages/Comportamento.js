"use client";
import { changeComportamento } from "@/store/reducers/formReducer";
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

const Comportamento = () => {
  const dispatch = useDispatch();

  const onChangeComportamento = (comportamento) => {
    dispatch(changeComportamento(comportamento));
    dispatch(increment());
  };

  return (
    <div>
      <StyledButton
        variant="contained"
        onClick={() => onChangeComportamento("Dócil")}
      >
        Dócil
      </StyledButton>
      <StyledButton
        variant="contained"
        onClick={() => onChangeComportamento("Bravo")}
      >
        Bravo
      </StyledButton>
    </div>
  );
};

export default Comportamento;
