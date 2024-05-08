"use client";
import { changeCastrado } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { useDispatch } from "react-redux";
import { StyledButton } from "./pages.styles";

const Castrado = () => {
  const dispatch = useDispatch();

  const onChangeCastrado = (castrado) => {
    dispatch(changeCastrado(castrado));
    dispatch(increment());
  };

  return (
    <div className="form-questions-buttons-div">
      <StyledButton
        className="button-mobile"
        variant="contained"
        onClick={() => onChangeCastrado("Sim")}
      >
        Sim
      </StyledButton>
      <StyledButton
        className="button-mobile"
        variant="contained"
        onClick={() => onChangeCastrado("Não")}
      >
        Não
      </StyledButton>
      <StyledButton
        className="button-mobile"
        variant="contained"
        onClick={() => onChangeCastrado("Não sei")}
      >
        Não sei
      </StyledButton>
    </div>
  );
};

export default Castrado;
