import { Autocomplete, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  background-color: #6dc4bf;
  padding: 50px;
  margin: 20px;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    background-color: #6dc4bf96;
  }
`;

export const NextButton = styled(Button)`
  border: 1px solid #6dc4bf;
  font-size: 15px;
  color: #6dc4bf;
  &:disabled {
    border-color: rgba(0, 0, 0, 0.26);
  }
  &:hover {
    background-color: #6dc4bf;
    color: white;
  }
`;

export const SendButton = styled(Button)`
  background-color: #6dc4bf;
  height: 100%;
  margin-left: 10px;
  font-size: 15px;
  color: white;
  &:disabled {
    border: 1px solid rgba(0, 0, 0, 0.26);
    background-color: transparent;
  }
  &:hover {
    background-color: #6dc4bf96;
  }
`;

export const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: #6dc4bf;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #6dc4bf;
  }
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #6dc4bf;
    }
    &.Mui-focused fieldset {
      border-color: #6dc4bf;
    }
  }
`;

export const StyledAutoComplete = styled(Autocomplete)`
  & label.Mui-focused {
    color: #6dc4bf;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #6dc4bf;
  }
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #6dc4bf;
    }
    &.Mui-focused fieldset {
      border-color: #6dc4bf;
    }
  }
`;
