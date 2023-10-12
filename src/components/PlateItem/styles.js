import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  border-radius: .8rem;
  padding: .6rem 1.2rem;
  
  &:has(input:focus) {
    border: ${({ theme }) => `2px dashed ${theme.COLORS.LIGHT_400}`};
  }

  > input {
    min-width: 6.7rem;
    max-width: 23rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > button {
    background: none;
    border: none;
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

    svg {
      font-size: 1.6rem;
    }
  }
`;