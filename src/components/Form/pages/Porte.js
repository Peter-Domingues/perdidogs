"use client";
import { changePorte } from "@/store/reducers/formReducer";
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

const Porte = () => {
  const dispatch = useDispatch();

  const onChangePorte = (porte) => {
    dispatch(changePorte(porte));
    dispatch(increment());
  };

  return (
    <div>
      <StyledButton variant="contained" onClick={() => onChangePorte("P")}>
        P
      </StyledButton>
      <StyledButton variant="contained" onClick={() => onChangePorte("M")}>
        M
      </StyledButton>
      <StyledButton variant="contained" onClick={() => onChangePorte("G")}>
        G
      </StyledButton>
    </div>
  );
};

export default Porte;
