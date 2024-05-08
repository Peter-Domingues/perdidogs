import PetCard from "../PetCard";
import { Pagination } from "@mui/material";

const Feed = ({ data, handleChangePage }) => {
  return (
    <div className="feed-container">
      <div className="feed-cards">
        {data &&
          data?.inundogs?.map((pet) => (
            <PetCard
              especie={pet.especie}
              sexo={pet.sexo}
              raca={pet.raca}
              cidade={pet.cidade}
              comportamento={pet.comportamento}
              faixaEtaria={pet.faixaEtaria}
              foto={pet.foto}
              responsavel={pet.contato.responsavel}
              telefone={pet.contato.telefone}
              cor={pet.cor}
              endereco={pet.endereco}
              observacao={pet.observacao}
              porte={pet.porte}
              saude={pet.saude}
            />
          ))}
      </div>

      <Pagination count={data?.totalPages} onChange={handleChangePage} />
    </div>
  );
};

export default Feed;
