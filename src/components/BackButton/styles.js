import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  background-color: transparent;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > svg {
    width: 2.8rem;
    height: 2.8rem;
  }
`;