import { Autocomplete, Button } from "@mui/material";
import styled from "styled-components";

export const SearchButton = styled(Button)`
  background-color: #ff6e6e;
  padding: 10px;
  font-size: 15px;
  color: white;
  font-weight: bold;
  &:disabled {
    background-color: transparent;
  }
  &:hover {
    background-color: #e66464;
  }
`;

export const StyledAutoComplete = styled(Autocomplete)`
  background-color: white;
  margin-right: 10px;
  & label.Mui-focused {
    color: black;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #6dc4bf;
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
