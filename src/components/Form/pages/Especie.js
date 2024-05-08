"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { changeEspecie } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { StyledButton } from "./pages.styles";

const Especie = () => {
  const dispatch = useDispatch();

  const onChangeEspecie = (especie) => {
    dispatch(changeEspecie(especie));
    dispatch(increment());
  };

  return (
    <div className="form-questions-buttons-div">
      <StyledButton
        variant="contained"
        onClick={() => onChangeEspecie("Cachorro")}
      >
        <Image width={100} height={100} src="/images/cao.png" />
      </StyledButton>
      <StyledButton variant="contained" onClick={() => onChangeEspecie("Gato")}>
        <Image width={100} height={100} src="/images/gato.png" />
      </StyledButton>
    </div>
  );
};

export default Especie;
