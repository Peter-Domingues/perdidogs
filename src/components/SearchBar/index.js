import { cidades, racas } from "@/data/options";
import { TextField, Button, CircularProgress } from "@mui/material";
import { StyledAutoComplete } from "./searchBar.styles";
import { useCallback, useEffect, useState } from "react";
import { getEnderecoList } from "@/api/apiService";
import { useDispatch } from "react-redux";
import { changeFilterEndereco } from "@/store/reducers/filterReducer";

const SearchBar = ({
  handleChangeFilters,
  handleSearch,
  filters,
  handleClearFilters,
  endereco,
}) => {
  const dispatch = useDispatch();
  const especieOptions = ["Cachorro", "Gato"];
  const [enderecoOptions, setEnderecosOptions] = useState([]);
  const sexoOptions = ["Macho", "Femea"];
  const porteOptions = ["P", "M", "G"];
  const [isDisabled, setIsDisabled] = useState(false);
  const [open, setOpen] = useState(false);

  const loading = open && enderecoOptions.length === 0;

  useEffect(() => {
    if (filters?.especie == "Gato") {
      return setIsDisabled(true);
    }
    return setIsDisabled(false);
  }, [filters]);

  const getEnderecos = useCallback(
    () =>
      getEnderecoList().then((res) => {
        let newEnderecosList = [];
        res.map(
          (item) => (newEnderecosList = [...newEnderecosList, item.endereco])
        );
        setEnderecosOptions(newEnderecosList);
      }),
    [getEnderecoList]
  );

  const handleOpenEndereco = () => {
    setOpen(true);
    getEnderecos();
  };

  const handleChangeEndereco = (e, value) => {
    dispatch(changeFilterEndereco(value));
  };

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
        multiple
        limitTags={1}
        value={endereco}
        onOpen={handleOpenEndereco}
        onClose={() => {
          setOpen(false);
        }}
        onChange={handleChangeEndereco}
        disablePortal
        id="endereco"
        disableCloseOnSelect
        options={enderecoOptions}
        loading={loading}
        getOptionLabel={(option) => option}
        sx={{ width: 280 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Endereço"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
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
        sx={{ width: 150 }}
        renderInput={(params) => <TextField {...params} label="Sexo" />}
      />
      <StyledAutoComplete
        value={filters?.porte || ""}
        onChange={handleChangeFilters("porte")}
        disablePortal
        id="combo-box-demo"
        options={porteOptions}
        disabled={isDisabled}
        sx={{ width: 150 }}
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
          disabled={!filters && !endereco}
          onClick={handleSearch}
        >
          Buscar
        </button>
        <Button
          disabled={!filters && !endereco}
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
