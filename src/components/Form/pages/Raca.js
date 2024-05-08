"use client";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { changeRaca } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { StyledAutoComplete } from "./pages.styles";
import { racas } from "@/data/options";

const Raca = () => {
  const dispatch = useDispatch();

  const onChangeRaca = (e, raca) => {
    dispatch(changeRaca(raca));
    dispatch(increment());
  };

  return (
    <div className="form-questions-buttons-div space-top">
      <StyledAutoComplete
        disablePortal
        id="combo-box-demo"
        options={racas}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Raça" />}
        onChange={onChangeRaca}
      />
    </div>
  );
};

export default Raca;
