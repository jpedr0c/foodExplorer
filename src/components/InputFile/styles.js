import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  > label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  `;

export const BoxInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  border-radius: .8rem;
  cursor: pointer;
  padding: 1.4rem 1.4rem;
  
  > svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > input {
    display: none;
  }
`;