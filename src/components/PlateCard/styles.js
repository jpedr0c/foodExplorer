import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 28rem;
  height: 38rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  padding: 3.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 1rem;

  > img {
    width: 10rem;
    height: 10rem;
    cursor: pointer;
  }

  > h4 {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
  }

  > span {
    display: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    line-height: 2.2rem;
  }

  > p {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  &[data-is-admin="true"] {
    max-height: 30rem;

    > div{
      display: none;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    > span {
      display: block;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    > img {
      width: 12rem;
      height: 12rem;
    }

    > h4 {
      font-size: 1.8rem;
    }

    > p {
      font-size: 2rem;
    }
  }
`;

export const ButtonTop = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  font-size: 2.4rem;
  cursor: pointer;
  
  > svg.colored {
    color: ${({ theme }) => theme.COLORS.TOMATO_300};
  }
  
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;