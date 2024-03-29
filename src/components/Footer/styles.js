import { Link } from "react-router-dom";
import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.footer`
  width: 100%;
  padding: 2.4rem;
  margin-top: 3.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    > span {
      font-size: 1.2rem;
    }
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: .8rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }

  > img {
    width: 2.4rem;
    height: 2.4rem;
  }

  > h1 {
    font-family: "Roboto", sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }
`;