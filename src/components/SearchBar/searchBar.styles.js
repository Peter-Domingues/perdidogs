import { Autocomplete, Button } from "@mui/material";
import styled from "styled-components";

export const SearchButton = styled(Button)`
  background-color: #49281f;
  padding: 10px;
  font-size: 15px;
  color: white;
  font-weight: bold;
  &:disabled {
    background-color: transparent;
  }
  &:hover {
    background-color: #371e17;
  }
  @media (max-width: 768px) {
    background-color: #ffe4b3;
    width: 80%;
    color: #49281f;
    &:hover {
      color: #ffe4b3;
    }
    &:disabled {
      background-color: #ffe4b3;
    }
  }
`;

export const StyledAutoComplete = styled(Autocomplete)`
  background-color: white;
  margin-right: 10px;
  border-radius: 15px;

  & label.Mui-focused {
    color: #371e17;
    border-radius: 15px;
  }
  .MuiAutocomplete-tag {
    max-width: calc(75% - 25px);
  }
  & .MuiOutlinedInput-root {
    border-radius: 15px;
    border-color: transparent;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #49281f;
  }
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: transparent;
    }
    &.Mui-focused fieldset {
      border-color: transparent;
    }
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: 5px 0;
    & .MuiInput-underline:after {
      border-bottom-color: #ffe4b3;
    }
  }
`;
