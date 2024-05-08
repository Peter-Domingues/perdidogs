import { cidades, comportamentos, racas } from "@/data/options";
import { TextField } from "@mui/material";
import { StyledAutoComplete, SearchButton } from "./searchBar.styles";

const SearchBar = () => {
  const especieOptions = ["Cachorro", "Gato"];
  const sexoOptions = ["Macho", "Fêmea"];
  const porteOptions = ["P", "M", "G"];

  return (
    <div className="search-container">
      <StyledAutoComplete
        disablePortal
        id="combo-box-demo"
        options={cidades}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Cidade" />}
      />
      <StyledAutoComplete
        disablePortal
        id="combo-box-demo"
        options={especieOptions}
        sx={{ width: 150 }}
        renderInput={(params) => <TextField {...params} label="Espécie" />}
      />
      <StyledAutoComplete
        disablePortal
        id="combo-box-demo"
        options={sexoOptions}
        sx={{ width: 100 }}
        renderInput={(params) => <TextField {...params} label="Sexo" />}
      />
      <StyledAutoComplete
        disablePortal
        id="combo-box-demo"
        options={porteOptions}
        sx={{ width: 100 }}
        renderInput={(params) => <TextField {...params} label="Porte" />}
      />
      <StyledAutoComplete
        disablePortal
        id="combo-box-demo"
        options={racas}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Raças" />}
      />
      <SearchButton>Buscar</SearchButton>
    </div>
  );
};

export default SearchBar;
