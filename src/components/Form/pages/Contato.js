import { changeContato } from "@/store/reducers/formReducer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { createInundog } from "../../../api/apiService";
import InputMask from "react-input-mask";
import { StyledTextField, SendButton } from "./pages.styles";
import { increment } from "@/store/reducers/pageReducer";

const Contato = () => {
  const dispatch = useDispatch();
  const contato = useSelector((state) => state.form.contato);

  const [nomeResponsavel, setNomeResponsavel] = useState(contato.responsavel);
  const [telefone, setTelefone] = useState(contato.telefone);
  const [nomeResponsavelError, setNomeResponsavelError] = useState(false);
  const [telefoneError, setTelefoneError] = useState(false);

  const especie = useSelector((state) => state.form.especie);
  const sexo = useSelector((state) => state.form.sexo);
  const raca = useSelector((state) => state.form.raca);
  const porte = useSelector((state) => state.form.porte);
  const cidade = useSelector((state) => state.form.cidade);
  const endereco = useSelector((state) => state.form.endereco);
  const obs = useSelector((state) => state.form.observacao);
  const cor = useSelector((state) => state.form.cor);
  const comportamento = useSelector((state) => state.form.comportamento);
  const faixaEtaria = useSelector((state) => state.form.faixaEtaria);
  const saude = useSelector((state) => state.form.saude);
  const castrado = useSelector((state) => state.form.castrado);
  const contato = useSelector((state) => state.form.contato);

  const onChangeNomeResponsavel = (e) => {
    setNomeResponsavel(e.target.value);
    setNomeResponsavelError(false);
  };

  const onChangeTelefone = (e) => {
    setTelefone(e.target.value);
    setTelefoneError(false);
  };

  const createDog = useCallback(
    () =>
      createInundog({
        especie,
        sexo,
        raca,
        porte,
        cidade,
        endereco,
        observacao: obs,
        cor,
        comportamento,
        faixaEtaria,
        saude,
        castrado,
        contato,
      }).then((res) => console.log(res)),
    [createInundog]
  );

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

    //createDog();
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
            value={telefone}
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
