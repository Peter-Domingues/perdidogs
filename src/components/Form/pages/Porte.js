"use client";
import { changePorte } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { useDispatch } from "react-redux";
import { StyledButton } from "./pages.styles";

const Porte = () => {
  const dispatch = useDispatch();

  const onChangePorte = (porte) => {
    dispatch(changePorte(porte));
    dispatch(increment());
  };

  return (
    <div className="form-questions-buttons-div">
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
