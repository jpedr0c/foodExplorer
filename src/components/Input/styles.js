import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  > label {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    border: none;
    border-radius: .8rem;
    padding: 1.2rem 1.4rem;
  }
`;