import { changeContato } from "@/store/reducers/formReducer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import InputMask from "react-input-mask";
import { StyledTextField, SendButton } from "./pages.styles";
import { increment } from "@/store/reducers/pageReducer";

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
      return setNomeResponsavelError(true);
    }
    if (telefone.trim() === "") {
      return setTelefoneError(true);
    }

    if (nomeResponsavel.trim() === "" || telefone.trim() === "") {
      return;
    }

    dispatch(
      changeContato({ responsavel: nomeResponsavel, telefone: telefone })
    );
    dispatch(increment());
  };

  return (
    <div className="form-contact-div space-top">
      <StyledTextField
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
          <StyledTextField
            label="Telefone:"
            error={telefoneError}
            className="space-top"
            helperText={
              telefoneError
                ? "Este campo é obrigatório"
                : "Formato: (99) 99999-9999"
            }
          />
        )}
      </InputMask>
      <SendButton
        style={{ marginLeft: 0, marginTop: "10px" }}
        onClick={handleSend}
      >
        Enviar
      </SendButton>
    </div>
  );
};

export default Contato;
