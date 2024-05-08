import Feed from "../Feed";
import { SendButton } from "../Form/pages/pages.styles";
import SearchBar from "../SearchBar";
import Link from "next/link";
import Instas from "../Instas";
import Divider from "@mui/material/Divider";
import SearchBarMobile from "../SearchBarMobile";
import { useState, useCallback, useEffect } from "react";
import { getInundogs } from "../../api/apiService";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});

  const handleChangePage = (e, value) => {
    setCurrentPage(value);
  };

  const getDogs = useCallback(
    (currentPage, filters) =>
      getInundogs({ page: currentPage, filters }).then((res) => setData(res)),
    [getInundogs]
  );

  useEffect(() => {
    getDogs(currentPage);
  }, [currentPage]);

  const handleChangeFilters = (filterName) => (e, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, [filterName]: value || "" };

      Object.keys(updatedFilters).forEach((key) => {
        if (updatedFilters[key] === "") {
          delete updatedFilters[key];
        }
      });
      return updatedFilters;
    });
  };

  const handleSearch = () => {
    getDogs(1, filters);
  };

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

      <SearchBar handleChangeFilters={handleChangeFilters} filters={filters} />
      <SearchBarMobile />
      <Feed
        data={data}
        handleChangePage={handleChangePage}
        handleSearch={handleSearch}
      />
      <Divider style={{ width: "80%" }} />
      <Instas />
    </div>
  );
};

export default HomePage;
