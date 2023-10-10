import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  > span {
    font-family: "Roboto", sans-serif;
    font-size: 2.3rem;
    font-weight: 700;
  }
`;

export const BtnCount = styled.button`
  border: none;
  background-color: transparent;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.7rem;
  }
`;