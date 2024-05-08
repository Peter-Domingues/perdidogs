"use client";
import { changeFaixaEtaria } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { useDispatch } from "react-redux";
import { StyledButton } from "./pages.styles";

const FaixaEtaria = () => {
  const dispatch = useDispatch();

  const onChangeFaixaEtaria = (FaixaEtaria) => {
    dispatch(changeFaixaEtaria(FaixaEtaria));
    dispatch(increment());
  };

  return (
    <div className="form-questions-buttons-div">
      <StyledButton
        variant="contained"
        onClick={() => onChangeFaixaEtaria("Filhote")}
      >
        Filhote
      </StyledButton>
      <StyledButton
        variant="contained"
        onClick={() => onChangeFaixaEtaria("Adulto")}
      >
        Adulto
      </StyledButton>
      <StyledButton
        variant="contained"
        onClick={() => onChangeFaixaEtaria("Idoso")}
      >
        Idoso
      </StyledButton>
      <StyledButton
        variant="contained"
        onClick={() => onChangeFaixaEtaria("Não sei")}
      >
        Não sei
      </StyledButton>
    </div>
  );
};

export default FaixaEtaria;
