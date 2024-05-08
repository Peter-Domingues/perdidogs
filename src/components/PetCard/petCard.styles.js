import { Button } from "@mui/material";
import styled from "styled-components";

export const FoundButton = styled(Button)`
  background-color: transparent;
  padding: 10px;
  font-size: 12px;
  color: #ff6e6e;
  font-weight: bold;
  &:disabled {
    background-color: transparent;
  }
  &:hover {
    background-color: transparent;
    color: #e66464;
  }
`;
