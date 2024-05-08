"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SendButton } from "./pages.styles";

const Resumo = () => {
  const [image, setImage] = useState(null);

  const especie = useSelector((state) => state.form.especie) || "Indefinido";
  const sexo = useSelector((state) => state.form.sexo) || "Indefinido";
  const raca = useSelector((state) => state.form.raca) || "Indefinido";
  const porte = useSelector((state) => state.form.porte) || "Indefinido";
  const cor = useSelector((state) => state.form.cor) || "Indefinido";
  const castrado = useSelector((state) => state.form.castrado) || "Indefinido";
  const comportamento =
    useSelector((state) => state.form.comportamento) || "Indefinido";
  const faixaEtaria =
    useSelector((state) => state.form.faixaEtaria) || "Indefinido";
  const saude = useSelector((state) => state.form.saude) || "Indefinido";
  const endereco = useSelector((state) => state.form.endereco) || "Indefinido";
  const cidade = useSelector((state) => state.form.cidade) || "Indefinido";
  const contato = useSelector((state) => state.form.contato) || "Indefinido";
  const observacao =
    useSelector((state) => state.form.observacao) || "Indefinido";
  const foto = useSelector((state) => state.form.foto) || "Indefinido";

  const infos = [
    { title: "Espécie:", info: especie },
    { title: "Sexo:", info: sexo },
    { title: "Raça:", info: raca },
    { title: "Porte:", info: porte },
    { title: "Cor:", info: cor },
    { title: "Castrado:", info: castrado },
    { title: "Comportamento:", info: comportamento },
    { title: "Faixa Etária:", info: faixaEtaria },
    { title: "Estado de saúde:", info: saude },
    { title: "Endereço onde está:", info: endereco },
    { title: "Cidade onde foi encontrado:", info: cidade },
    { title: "Nome do responsável:", info: contato.responsavel },
    { title: "Telefone do responsável:", info: contato.telefone },
    { title: "Observação:", info: observacao },
  ];

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(foto);
  }, [foto]);

  return (
    <div>
      <div className="resumo-div">
        <div>
          {infos.map((info) => {
            if (info !== contato)
              return (
                <div className="info-row">
                  <h1 className="info-title">{info.title}</h1>
                  <h1>{info.info}</h1>
                </div>
              );
          })}
        </div>
        {image && (
          <img
            src={image}
            alt="Preview"
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
        )}
      </div>
    </div>
  );
};

export default Resumo;
