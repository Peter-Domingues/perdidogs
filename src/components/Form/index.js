"use client";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Especie from "./pages/Especie";
import Sexo from "./pages/Sexo";
import Raca from "./pages/Raca";
import Porte from "./pages/Porte";
import Endereco from "./pages/Endereco";
import Foto from "./pages/Foto";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/store/reducers/pageReducer";
import Cidade from "./pages/Cidade";
import Observacao from "./pages/Observacao";
import FaixaEtaria from "./pages/FaixaEtaria";
import Comportamento from "./pages/Comportamento";
import Saude from "./pages/Saude";
import Castrado from "./pages/Castrado";
import Cor from "./pages/Cor";
import Contato from "./pages/Contato";

const Form = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
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

  console.log(
    { especie },
    { sexo },
    { raca },
    { porte },
    { cidade },
    { endereco },
    { obs },
    { cor },
    { comportamento },
    { faixaEtaria },
    { saude },
    { castrado },
    { contato }
  );

  const pages = [
    { title: "Qual a espécie?", component: <Especie /> },
    { title: "Qual o sexo?", component: <Sexo /> },
    { title: "Qual a Raça?", component: <Raca /> },
    { title: "Qual o Porte?", component: <Porte /> },
    { title: "Qual a Cor?", component: <Cor /> },
    { title: "Qual a Faixa Etária?", component: <FaixaEtaria /> },
    { title: "Qual o Comportamento do animal?", component: <Comportamento /> },
    { title: "Qual o estado de saúde?", component: <Saude /> },
    { title: "O animal é castrado?", component: <Castrado /> },
    { title: "Qual a Cidade?", component: <Cidade /> },
    { title: "Qual o Endereço?", component: <Endereco /> },
    { title: "Algum observação?", component: <Observacao /> },
    { title: "Adicione uma foto", component: <Foto /> },
    { title: "Contato do responsável", component: <Contato /> },
  ];
  const [disableNext, setDisableNext] = useState(false);
  const [disableBack, setDisableBack] = useState(false);

  useEffect(() => {
    if (counter + 1 >= pages.length) {
      setDisableNext(true);
      setDisableBack(false);
    } else if (counter - 1 < 0) {
      setDisableNext(false);
      setDisableBack(true);
    } else {
      setDisableNext(false);
      setDisableBack(false);
    }
  }, [counter]);

  const handleNext = () => {
    if (counter + 1 < pages.length) {
      dispatch(increment());
    }
  };

  const handleBack = () => {
    if (counter - 1 >= 0) {
      dispatch(decrement());
    }
  };

  return (
    <div>
      <h1 className="form-title">{pages[counter].title}</h1>
      {pages[counter].component}

      <Button disabled={disableBack} onClick={handleBack}>
        Voltar
      </Button>
      <Button disabled={disableNext} onClick={handleNext}>
        Pular
      </Button>
    </div>
  );
};

export default Form;
