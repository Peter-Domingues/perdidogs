import Feed from "../Feed";
import { SendButton } from "../Form/pages/pages.styles";
import SearchBar from "../SearchBar";
import Link from "next/link";
import Instas from "../Instas";
import Divider from "@mui/material/Divider";
import { useState, useCallback, useEffect } from "react";
import { getInundogs } from "../../api/apiService";
import { useDispatch } from "react-redux";
import { clearFilters } from "@/store/reducers/filterReducer";

const HomePage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState(null);

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  const handleChangePage = (e, value) => {
    setCurrentPage(value);
  };

  const getDogs = useCallback(
    (currentPage, filters) =>
      getInundogs({ page: currentPage, ...filters }).then((res) =>
        setData(res)
      ),
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
      if (isEmpty(updatedFilters)) getDogs(1);
      return updatedFilters;
    });
  };

  const handleSearch = () => {
    getDogs(1, filters);
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setFilters(null);
    getDogs(1);
  };

  return (
    <div className="home-title-div">
      <h1 className="home-title">PerdiDogs & ResGatos</h1>
      <p className="space-top subtitle">
        Página dedicada para cadastrar e encontrar os pets que foram resgatados
        das enchentes do Rio Grande do Sul
      </p>
      <div className="register-button">
        <p className="title-2">Resgatou algum pet? </p>
        <Link href="/form">
          <button className="send-button">Cadastrar Aqui</button>
        </Link>
      </div>

      <SearchBar
        handleClearFilters={handleClearFilters}
        handleChangeFilters={handleChangeFilters}
        handleSearch={handleSearch}
        filters={filters}
      />
      <Feed data={data} handleChangePage={handleChangePage} />
      <Divider style={{ width: "80%" }} />
      <Instas />
    </div>
  );
};

export default HomePage;
