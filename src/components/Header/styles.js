import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: ${({ $isadmin }) => $isadmin ? "start" : "space-between"}; */
  padding: 2.4rem 2.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;  
  margin: 0 auto;

  .desktop {
    display: none;
  }
  
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 3rem;
    
    > button.desktop{
      max-width: 18rem;
    }

    .desktop {
      display: flex;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    gap: 5rem;
  }
`;

export const Menu = styled.button`
  background-color: transparent;
  border: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    display: none;
  }
`;

export const Logo = styled.a`
  width: 100%;
  max-width: 17rem;
  display: flex;
  align-items: center;
  margin: ${({ $isadmin }) => $isadmin ? "0" : "0 auto"};
  gap: .8rem;

  > img {
    width: 2.4rem;
    height: 2.4rem;
  }

  > .text {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: end;

    > h1 {
      font-family: "Roboto", sans-serif;
      font-size: 2.2rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  
    > span {
      position: absolute;
      bottom: -.8rem;
      right: 0;
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    flex: 1;
    margin: 0;
  }
`;

export const BtnSignOut = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > svg {
    font-size: 3.2rem;
  }
`;

export const Cart = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > svg {
    font-size: 3.2rem;
  }

  > span {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 50%;
    padding: .1rem .5rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }

`;