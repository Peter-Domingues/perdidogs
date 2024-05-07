import { changeContato } from "@/store/reducers/formReducer";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import InputMask from "react-input-mask";

const Contato = () => {
  const dispatch = useDispatch();
  const [nomeResponsavel, setNomeResponsavel] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nomeResponsavelError, setNomeResponsavelError] = useState(false);
  const [telefoneError, setTelefoneError] = useState(false);

  const onChangeNomeResponsavel = (e) => {
    setNomeResponsavel(e.target.value);
    setNomeResponsavelError(false);
  };

  const onChangeTelefone = (e) => {
    setTelefone(e.target.value);
    setTelefoneError(false);
  };

  const handleSend = () => {
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
      <InputMask
        mask="(99) 99999-9999"
        value={telefone}
        onChange={onChangeTelefone}
      >
        {() => (
          <TextField
            label="Telefone:"
            error={telefoneError}
            helperText={
              telefoneError
                ? "Este campo é obrigatório"
                : "Formato: (99) 99999-9999"
            }
          />
        )}
      </InputMask>
      <Button onClick={handleSend}> Enviar</Button>
    </div>
  );
};

export default Contato;
