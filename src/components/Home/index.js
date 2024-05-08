import Feed from "../Feed";
import { SendButton } from "../Form/pages/pages.styles";
import SearchBar from "../SearchBar";
import Link from "next/link";
import Instas from "../Instas";
import Divider from "@mui/material/Divider";
import SearchBarMobile from "../SearchBarMobile";

const HomePage = () => {
  return (
    <div className="home-title-div">
      <h1 className="home-title">PerdiDogs & ResGatos</h1>
      <p className="space-top subtitle">
        Página dedicada para cadastrar e encontrar os pets que foram resgatados
        das enchentes do Rio Grande do Sul
      </p>
      <div className="register-button">
        <p>Resgatou algum pet? </p>
        <Link href="/form">
          <SendButton>Cadastrar Aqui</SendButton>
        </Link>
      </div>

      <SearchBar />
      <SearchBarMobile />
      <Feed />
      <Divider style={{ width: "80%" }} />
      <Instas />
    </div>
  );
};

export default HomePage;
