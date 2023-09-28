import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  > button {
    border: none;
    background-color: transparent;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2.7rem;
    }
  }

  > span {
    font-family: "Roboto", sans-serif;
    font-size: 2.3rem;
    font-weight: 700;
  }
`;