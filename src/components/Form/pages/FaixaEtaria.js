"use client";
import { changeFaixaEtaria } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { useDispatch } from "react-redux";
import { StyledButtonText } from "./pages.styles";

const FaixaEtaria = () => {
  const dispatch = useDispatch();

  const onChangeFaixaEtaria = (FaixaEtaria) => {
    dispatch(changeFaixaEtaria(FaixaEtaria));
    dispatch(increment());
  };

  return (
    <div className="form-questions-buttons-div">
      <StyledButtonText
        className="button-mobile"
        variant="contained"
        onClick={() => onChangeFaixaEtaria("Filhote")}
      >
        Filhote
      </StyledButtonText>
      <StyledButtonText
        className="button-mobile"
        variant="contained"
        onClick={() => onChangeFaixaEtaria("Adulto")}
      >
        Adulto
      </StyledButtonText>
      <StyledButtonText
        className="button-mobile"
        variant="contained"
        onClick={() => onChangeFaixaEtaria("Idoso")}
      >
        Idoso
      </StyledButtonText>
      <StyledButtonText
        className="button-mobile"
        variant="contained"
        onClick={() => onChangeFaixaEtaria("Não sei")}
      >
        Não sei
      </StyledButtonText>
    </div>
  );
};

export default FaixaEtaria;
