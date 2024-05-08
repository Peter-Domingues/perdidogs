import { Autocomplete, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  background-color: #49281f;
  padding: 50px;
  margin: 20px;
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 768px) {
    padding: 30px;
  }
  &:hover {
    background-color: black;
  }
`;

export const StyledButtonText = styled(Button)`
  background-color: #49281f;
  padding: 50px;
  margin: 20px;
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 768px) {
    padding: 30px;
    margin: 10px 0;
  }
  &:hover {
    background-color: black;
  }
`;

export const NextButton = styled(Button)`
  border: 1px solid #49281f;
  font-size: 15px;
  color: #49281f;
  &:disabled {
    border-color: rgba(0, 0, 0, 0.26);
  }
  &:hover {
    background-color: #49281f;
    color: white;
  }
`;

export const SendButton = styled(Button)`
  background-color: #49281f;
  height: 100%;
  margin-left: 10px;
  font-size: 15px;
  color: white;
  &:disabled {
    border: 1px solid rgba(0, 0, 0, 0.26);
    background-color: transparent;
  }
  &:hover {
    background-color: black;
  }
`;

export const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: #49281f;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #49281f;
  }
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #49281f;
    }
    &.Mui-focused fieldset {
      border-color: #49281f;
    }
  }
`;

export const StyledAutoComplete = styled(Autocomplete)`
  & label.Mui-focused {
    color: #49281f;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #49281f;
  }
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #49281f;
    }
    &.Mui-focused fieldset {
      border-color: #49281f;
    }
  }
`;
