import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 50rem;
  
  > label {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  
  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    max-width: 70rem;
  }
`;

export const BoxInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding: .6rem 1.4rem;
  border-radius: .8rem;
  
  > svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    border: none;
    padding: 1.2rem 0;
  
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1.6rem;
    }
  }
`;