import { Autocomplete, Button } from "@mui/material";
import styled from "styled-components";

export const SearchMobileButton = styled(Button)`
  background-color: #49281f;
  padding: 10px;
  font-size: 15px;
  width: 80%;
  color: white;
  font-weight: bold;
  &:disabled {
    background-color: transparent;
  }
  &:hover {
    background-color: black;
  }
`;

export const StyledAutoComplete = styled(Autocomplete)`
  background-color: white;
  width: 100%
  margin-right: 10px;
  & label.Mui-focused {
    color: black;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #49281F;
  }
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: transparent;
    }
    &.Mui-focused fieldset {
      border-color: transparent;
    }
  }
`;
