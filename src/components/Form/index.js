"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
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
import { NextButton } from "./pages/pages.styles";
import { ArrowBack, ArrowForward, Close } from "@mui/icons-material";
import Resumo from "./pages/Resumo";

const Form = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const especie = useSelector((state) => state.form.especie);

  const pages = [
    { title: "Qual a espécie?", component: <Especie /> },
    { title: "Qual o sexo?", component: <Sexo /> },
    { title: "Qual a Raça?", component: <Raca /> },
    { title: "Qual o Porte?", component: <Porte /> },
    { title: "Qual a Cor?", component: <Cor /> },
    { title: "Qual a Faixa Etária?", component: <FaixaEtaria /> },
    {
      title: "Como é o comportamento do animal?",
      component: <Comportamento />,
    },
    { title: "Qual o estado de saúde?", component: <Saude /> },
    { title: "O animal é castrado?", component: <Castrado /> },
    {
      title: "Qual a Cidade onde o animal foi resgatado?",
      component: <Cidade />,
    },
    { title: "Qual o Endereço onde o animal está?", component: <Endereco /> },
    { title: "Alguma observação?", component: <Observacao /> },
    { title: "Adicione uma foto", component: <Foto /> },
    { title: "Contato do responsável", component: <Contato /> },
    {
      title: "Aqui está o resumo, por favor confira se está tudo certo.",
      component: <Resumo />,
    },
  ];
  const [disableNext, setDisableNext] = useState(false);
  const [disableBack, setDisableBack] = useState(false);
  const isLastPage = counter + 1 == pages.length;

  useEffect(() => {
    if (counter == 0) {
      setDisableNext(true);
      setDisableBack(true);
      return;
    }
    if (counter + 1 >= pages.length) {
      setDisableNext(false);
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
      if (counter == 1 && especie == "gato") {
        dispatch(increment());
        dispatch(increment());
      }
      dispatch(increment());
    }
  };

  const handleFinish = () => {
    if (counter + 1 < pages.length) {
      if (counter == 1 && especie == "gato") {
        dispatch(increment());
        dispatch(increment());
      }
      dispatch(increment());
    }
  };

  const handleBack = () => {
    if (counter - 1 >= 0) {
      if (counter == 4 && especie == "gato") {
        dispatch(decrement());
        dispatch(decrement());
      }
      dispatch(decrement());
    }
  };

  return (
    <div>
      <div className="title-and-close">
        <h1 className="title">Você está adicionando um novo Resgatado</h1>{" "}
        <Link href="/">
          <Close className="icon-close" />
        </Link>
      </div>
      <h1 className="form-title">{pages[counter].title}</h1>
      {pages[counter].component}

      <div className="form-buttons-div">
        <NextButton disabled={disableBack} onClick={handleBack}>
          <ArrowBack />
          Voltar
        </NextButton>
        <NextButton
          disabled={disableNext}
          onClick={isLastPage ? handleFinish : handleNext}
        >
          {isLastPage ? (
            "Finalizar"
          ) : (
            <>
              Pular <ArrowForward />
            </>
          )}
        </NextButton>
      </div>
    </div>
  );
};

export default Form;
