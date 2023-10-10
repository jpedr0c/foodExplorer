import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100dvh;
  overflow-x: hidden;
`;

export const Box = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

export const Plate = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: 2rem;

  > img {
    width: 26.4rem;
    height: 26.4rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    flex-direction: row;
    gap: 5rem;
    margin-top: 4.2rem;
    margin-bottom: 9rem;

    > img {
      width: 33rem;
      height: 33rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
    > img {
      width: 38rem;
      height: 38rem;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h2 {
    font-family: "Poppins", sans-serif;
    font-size: 2.7rem;
    font-weight: 500;
    margin-top: 1.6rem;
  }

  > p {
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    text-align: center;
    margin: 2.4rem 0;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    align-items: start;

    > h2 {
      font-size: 4rem;
    }

    > p {
      text-align: start;
    }

    > div {
      justify-content: start;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  margin-top: 4.8rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: ${({ isAdmin }) => isAdmin ? "40%" : "100%"};
  }
`;