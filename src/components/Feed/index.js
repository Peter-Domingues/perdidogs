import PetCard from "../PetCard";
import { Pagination } from "@mui/material";

const Feed = () => {
  const allPets = [
    {
      especie: "Cachorro",
      sexo: "Macho",
      porte: "P",
      raca: "SRD (Vira-Latas)",
      cidade: "Canoas",
      cor: "Amarelo",
      foto: "",
      saude: "Saudável",
      comportamento: "Dócil",
      faixaEtaria: "Filhote",
      endereco: "Galpão da Ulbra",
      responsavel: "Peter",
      telefone: "51999999",
    },
    {
      especie: "Cachorro",
      sexo: "Macho",
      porte: "P",
      raca: "SRD (Vira-Latas)",
      cidade: "Canoas",
      cor: "Amarelo",
      foto: "",
      saude: "Saudável",
      comportamento: "Dócil",
      faixaEtaria: "Filhote",
      endereco: "Galpão da Ulbra",
      responsavel: "Peter",
      telefone: "51999999",
    },
    {
      especie: "Cachorro",
      sexo: "Macho",
      porte: "P",
      raca: "SRD (Vira-Latas)",
      cidade: "Canoas",
      cor: "Amarelo",
      foto: "",
      saude: "Saudável",
      comportamento: "Dócil",
      faixaEtaria: "Filhote",
      endereco: "Galpão da Ulbra",
      responsavel: "Peter",
      telefone: "51999999",
    },
    {
      especie: "Cachorro",
      sexo: "Macho",
      porte: "P",
      raca: "SRD (Vira-Latas)",
      cidade: "Canoas",
      cor: "Amarelo",
      foto: "",
      saude: "Saudável",
      comportamento: "Dócil",
      faixaEtaria: "Filhote",
      endereco: "Galpão da Ulbra",
      responsavel: "Peter",
      telefone: "51999999",
    },
    {
      especie: "Cachorro",
      sexo: "Macho",
      porte: "P",
      raca: "SRD (Vira-Latas)",
      cidade: "Canoas",
      cor: "Amarelo",
      foto: "",
      saude: "Saudável",
      comportamento: "Dócil",
      faixaEtaria: "Filhote",
      endereco: "Galpão da Ulbra",
      responsavel: "Peter",
      telefone: "51999999",
    },
    {
      especie: "Cachorro",
      sexo: "Macho",
      porte: "P",
      raca: "SRD (Vira-Latas)",
      cidade: "Canoas",
      cor: "Amarelo",
      foto: "",
      saude: "Saudável",
      comportamento: "Dócil",
      faixaEtaria: "Filhote",
      endereco: "Galpão da Ulbra",
      responsavel: "Peter",
      telefone: "51999999",
    },
  ];

  return (
    <div className="feed-container">
      {allPets.map((pet) => (
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
      <Pagination count={10} />
    </div>
  );
};

export default Feed;
