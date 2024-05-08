import { cidades, racas } from "@/data/options";
import { TextField } from "@mui/material";
import {
  StyledAutoComplete,
  SearchMobileButton,
} from "./searchBarMobile.styles";

const SearchBarMobile = () => {
  const especieOptions = ["Cachorro", "Gato"];
  const sexoOptions = ["Macho", "Fêmea"];
  const porteOptions = ["P", "M", "G"];

  return (
    <div className="search-container-mobile">
      <StyledAutoComplete
        disablePortal
        id="combo-box-demo"
        options={cidades}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Cidade" />}
      />
      <StyledAutoComplete
        className="space-top"
        disablePortal
        id="combo-box-demo"
        options={especieOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Espécie" />}
      />
      <StyledAutoComplete
        className="space-top"
        disablePortal
        id="combo-box-demo"
        options={sexoOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Sexo" />}
      />
      <StyledAutoComplete
        className="space-top"
        disablePortal
        id="combo-box-demo"
        options={porteOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Porte" />}
      />
      <StyledAutoComplete
        className="space-top"
        disablePortal
        id="combo-box-demo"
        options={racas}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Raças" />}
      />
      <SearchMobileButton className="space-top">Buscar</SearchMobileButton>
    </div>
  );
};

export default SearchBarMobile;
