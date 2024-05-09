import { cidades, racas } from "@/data/options";
import { TextField, Button } from "@mui/material";
import { StyledAutoComplete, SearchButton } from "./searchBar.styles";
import { useEffect, useState } from "react";

const SearchBar = ({
  handleChangeFilters,
  handleSearch,
  filters,
  handleClearFilters,
}) => {
  const especieOptions = ["Cachorro", "Gato"];
  const sexoOptions = ["Macho", "Fêmea"];
  const porteOptions = ["P", "M", "G"];
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (filters?.especie == "Gato") {
      return setIsDisabled(true);
    }
    return setIsDisabled(false);
  }, [filters]);

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
        disabled={isDisabled}
        sx={{ width: 100 }}
        renderInput={(params) => <TextField {...params} label="Porte" />}
      />
      <StyledAutoComplete
        value={filters?.raca || ""}
        onChange={handleChangeFilters("raca")}
        disablePortal
        id="combo-box-demo"
        disabled={isDisabled}
        options={racas}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Raças" />}
      />

      <div className="search-buttons">
        <button
          className="send-button search-button"
          disabled={!filters}
          onClick={handleSearch}
        >
          Buscar
        </button>
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
