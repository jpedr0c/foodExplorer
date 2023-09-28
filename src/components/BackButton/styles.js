import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 2rem 0 2rem 4rem;
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