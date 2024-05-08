import { cidades, racas } from "@/data/options";
import { TextField } from "@mui/material";
import {
  StyledAutoComplete,
  SearchMobileButton,
} from "./searchBarMobile.styles";

const SearchBarMobile = ({ handleChangeFilters, handleSearch }) => {
  const especieOptions = ["Cachorro", "Gato"];
  const sexoOptions = ["Macho", "Fêmea"];
  const porteOptions = ["P", "M", "G"];

  return (
    <div className="search-container-mobile">
      <StyledAutoComplete
        className="search-input"
        onChange={handleChangeFilters("cidade")}
        disablePortal
        id="combo-box-demo"
        options={cidades}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Cidade" />}
      />
      <StyledAutoComplete
        onChange={handleChangeFilters("especie")}
        className="space-top"
        disablePortal
        id="combo-box-demo"
        options={especieOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Espécie" />}
      />
      <StyledAutoComplete
        onChange={handleChangeFilters("sexo")}
        className="space-top"
        disablePortal
        id="combo-box-demo"
        options={sexoOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Sexo" />}
      />
      <StyledAutoComplete
        onChange={handleChangeFilters("porte")}
        className="space-top"
        disablePortal
        id="combo-box-demo"
        options={porteOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Porte" />}
      />
      <StyledAutoComplete
        onChange={handleChangeFilters("raca")}
        className="space-top"
        disablePortal
        id="combo-box-demo"
        options={racas}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Raças" />}
      />
      <SearchMobileButton onClick={handleSearch} className="space-top">
        Buscar
      </SearchMobileButton>
    </div>
  );
};

export default SearchBarMobile;
