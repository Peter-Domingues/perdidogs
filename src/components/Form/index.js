"use client";
import { useEffect, useState } from "react";
import Especie from "./pages/Especie";
import Sexo from "./pages/Sexo";
import Raca from "./pages/Raca";
import Porte from "./pages/Porte";
import Endereco from "./pages/Endereco";
import Foto from "./pages/Foto";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setCounter } from "@/store/reducers/pageReducer";
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
import { IconButton } from "@mui/material";
import { clearStates } from "@/store/reducers/formReducer";
import { useRouter } from "next/navigation";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const Form = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const formAnswers = useSelector((state) => state.form);

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

  const canSkipPage = (pageCount) => {
    switch (pageCount) {
      case 0:
        if (formAnswers.especie == "") return false;
        return true;
      case 1:
        if (formAnswers.sexo == "") return false;
        return true;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 11:
        return true;
      case 9:
        if (formAnswers.cidade == "") return false;
        return true;
      case 10:
        if (formAnswers.endereco == "") return false;
        return true;
      case 12:
        if (formAnswers.foto == null) return false;
        return true;
      case 13:
        if (formAnswers.contato.responsavel == "") return false;
        return true;

      default:
        return true; // Allow skipping other pages by default
    }
  };

  useEffect(() => {
    const canSkip = canSkipPage(counter);

    if (!canSkip) {
      setDisableNext(true);
      if (counter == 0) {
        return setDisableBack(true);
      }
      setDisableBack(false);
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
      if (counter == 1 && formAnswers.especie == "Gato") {
        return dispatch(setCounter(4));
      }
      dispatch(increment());
    }
  };

  const handleFinish = () => {};

  const handleBack = () => {
    if (counter - 1 >= 0) {
      if (counter == 4 && formAnswers.especie == "Gato") {
        return dispatch(setCounter(1));
      }
      dispatch(decrement());
    }
  };

  const handleCancel = () => {
    router.push("/");
    dispatch(setCounter(0));
    dispatch(clearStates());
  };

  return (
    <div className="form-page">
      <div className="title-and-close">
        <h1 className="title">Você está adicionando um novo Resgatado</h1>{" "}
        <IconButton onClick={handleCancel}>
          <Close className="icon-close" />
        </IconButton>
      </div>
      <div className="title-and-content">
        <h1 className="form-title">{pages[counter].title}</h1>
        {pages[counter].component}
      </div>

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
