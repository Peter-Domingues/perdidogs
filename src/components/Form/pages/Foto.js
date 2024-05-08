"use client";

import ImageUpload from "@/components/ImageUpload";
import { increment } from "@/store/reducers/pageReducer";
import { useDispatch, useSelector } from "react-redux";
import { SendButton } from "./pages.styles";

const Foto = () => {
  const foto = useSelector((state) => state.form.foto);
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(increment());
  };

  return (
    <div className="form-questions-buttons-div">
      <ImageUpload />
      <SendButton disabled={!foto} onClick={handleSave}>
        Salvar
      </SendButton>
    </div>
  );
};

export default Foto;
