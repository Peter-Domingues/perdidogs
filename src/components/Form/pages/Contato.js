import { changeContato } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Contato = () => {
  const dispatch = useDispatch();
  const [nomeResponsavel, setNomeResponsavel] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nomeResponsavelError, setNomeResponsavelError] = useState(false);
  const [telefoneError, setTelefoneError] = useState(false);

  const onChangeNomeResponsavel = (e) => {
    setNomeResponsavel(e.target.value);
    // Reset error state when user starts typing
    setNomeResponsavelError(false);
  };

  const onChangeTelefone = (e) => {
    setTelefone(e.target.value);
    // Reset error state when user starts typing
    setTelefoneError(false);
  };

  const handleSend = () => {
    // Check if fields are empty
    if (nomeResponsavel.trim() === "") {
      setNomeResponsavelError(true);
    }
    if (telefone.trim() === "") {
      setTelefoneError(true);
    }

    // If any field is empty, do not proceed
    if (nomeResponsavel.trim() === "" || telefone.trim() === "") {
      return;
    }

    dispatch(
      changeContato({ responsavel: nomeResponsavel, telefone: telefone })
    );
  };

  return (
    <div>
      <TextField
        label="Nome do responsável"
        value={nomeResponsavel}
        onChange={onChangeNomeResponsavel}
        error={nomeResponsavelError}
        helperText={nomeResponsavelError ? "Este campo é obrigatório" : ""}
      />
      <TextField
        label="Telefone:"
        value={telefone}
        onChange={onChangeTelefone}
        error={telefoneError}
        helperText={telefoneError ? "Este campo é obrigatório" : ""}
      />
      <Button onClick={handleSend}> Enviar</Button>
    </div>
  );
};

export default Contato;
