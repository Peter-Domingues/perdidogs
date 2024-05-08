"use client";
import { changeComportamento } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { useDispatch } from "react-redux";
import { StyledButton } from "./pages.styles";

const Comportamento = () => {
  const dispatch = useDispatch();

  const onChangeComportamento = (comportamento) => {
    dispatch(changeComportamento(comportamento));
    dispatch(increment());
  };

  return (
    <div className="form-questions-buttons-div">
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
