"use client";
import { useDispatch, useSelector } from "react-redux";
import { changeSexo } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { StyledButton } from "./pages.styles";

const Sexo = () => {
  const dispatch = useDispatch();
  const especie = useSelector((state) => state.form.especie);

  const onChangeSexo = (sexo) => {
    dispatch(changeSexo(sexo));
    if (especie == "gato") {
      dispatch(increment());
      dispatch(increment());
      dispatch(increment());
      return;
    }
    dispatch(increment());
  };

  return (
    <div className="form-questions-buttons-div">
      <StyledButton variant="contained" onClick={() => onChangeSexo("Macho")}>
        Macho
      </StyledButton>
      <StyledButton variant="contained" onClick={() => onChangeSexo("Femea")}>
        Fêmea
      </StyledButton>
    </div>
  );
};

export default Sexo;
