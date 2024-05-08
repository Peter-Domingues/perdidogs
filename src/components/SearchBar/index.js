import { cidades, racas } from "@/data/options";
import { TextField, Button } from "@mui/material";
import { StyledAutoComplete, SearchButton } from "./searchBar.styles";

const SearchBar = ({
  handleChangeFilters,
  handleSearch,
  filters,
  handleClearFilters,
}) => {
  const especieOptions = ["Cachorro", "Gato"];
  const sexoOptions = ["Macho", "Fêmea"];
  const porteOptions = ["P", "M", "G"];

  return (
    <div className="search-container">
      <StyledAutoComplete
        value={filters?.cidade || ""}
        onChange={handleChangeFilters("cidade")}
        disablePortal
        id="cidades"
        options={cidades}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Cidade" />}
      />
      <StyledAutoComplete
        value={filters?.especie || ""}
        onChange={handleChangeFilters("especie")}
        disablePortal
        id="combo-box-demo"
        options={especieOptions}
        sx={{ width: 150 }}
        renderInput={(params) => <TextField {...params} label="Espécie" />}
      />
      <StyledAutoComplete
        value={filters?.sexo || ""}
        onChange={handleChangeFilters("sexo")}
        disablePortal
        id="combo-box-demo"
        options={sexoOptions}
        sx={{ width: 100 }}
        renderInput={(params) => <TextField {...params} label="Sexo" />}
      />
      <StyledAutoComplete
        value={filters?.porte || ""}
        onChange={handleChangeFilters("porte")}
        disablePortal
        id="combo-box-demo"
        options={porteOptions}
        sx={{ width: 100 }}
        renderInput={(params) => <TextField {...params} label="Porte" />}
      />
      <StyledAutoComplete
        value={filters?.raca || ""}
        onChange={handleChangeFilters("raca")}
        disablePortal
        id="combo-box-demo"
        options={racas}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Raças" />}
      />

      <div className="search-buttons">
        <SearchButton disabled={!filters} onClick={handleSearch}>
          Buscar
        </SearchButton>
        <Button
          disabled={!filters}
          onClick={handleClearFilters}
          className="clear-button"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
