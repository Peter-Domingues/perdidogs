import { cidades, racas } from "@/data/options";
import { TextField } from "@mui/material";
import { useState } from "react";
import { StyledAutoComplete, SearchButton } from "./searchBar.styles";

const SearchBar = ({ handleChangeFilters, handleSearch }) => {
  const especieOptions = ["Cachorro", "Gato"];
  const sexoOptions = ["Macho", "Fêmea"];
  const porteOptions = ["P", "M", "G"];

  return (
    <div className="search-container">
      <StyledAutoComplete
        onChange={handleChangeFilters("cidade")}
        disablePortal
        id="cidades"
        options={cidades}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Cidade" />}
      />
      <StyledAutoComplete
        onChange={handleChangeFilters("especie")}
        disablePortal
        id="combo-box-demo"
        options={especieOptions}
        sx={{ width: 150 }}
        renderInput={(params) => <TextField {...params} label="Espécie" />}
      />
      <StyledAutoComplete
        onChange={handleChangeFilters("sexo")}
        disablePortal
        id="combo-box-demo"
        options={sexoOptions}
        sx={{ width: 100 }}
        renderInput={(params) => <TextField {...params} label="Sexo" />}
      />
      <StyledAutoComplete
        onChange={handleChangeFilters("porte")}
        disablePortal
        id="combo-box-demo"
        options={porteOptions}
        sx={{ width: 100 }}
        renderInput={(params) => <TextField {...params} label="Porte" />}
      />
      <StyledAutoComplete
        onChange={handleChangeFilters("raca")}
        disablePortal
        id="combo-box-demo"
        options={racas}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Raças" />}
      />
      <SearchButton onClick={handleSearch}>Buscar</SearchButton>
    </div>
  );
};

export default SearchBar;
