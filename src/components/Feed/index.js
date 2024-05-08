import PetCard from "../PetCard";
import { Pagination } from "@mui/material";
import { getInundogs } from "../../api/apiService";
import { useEffect, useState, useCallback } from "react";

const Feed = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (e, value) => {
    setCurrentPage(value);
  };

  console.log(currentPage);

  const getDogs = useCallback(
    (currentPage) =>
      getInundogs({ page: currentPage }).then((res) => setData(res)),
    [getInundogs]
  );

  useEffect(() => {
    getDogs(currentPage);
  }, [currentPage]);

  return (
    <div className="feed-container">
      {data &&
        data.inundogs.map((pet) => (
          <PetCard
            especie={pet.especie}
            sexo={pet.sexo}
            raca={pet.raca}
            cidade={pet.cidade}
            comportamento={pet.comportamento}
            faixaEtaria={pet.faixaEtaria}
            foto={pet.foto}
            responsavel={pet.responsavel}
            telefone={pet.telefone}
            cor={pet.cor}
            endereco={pet.endereco}
            observacao={pet.observacao}
            porte={pet.porte}
            saude={pet.saude}
          />
        ))}
      <Pagination count={data?.totalPages} onChange={handleChangePage} />
    </div>
  );
};

export default Feed;
