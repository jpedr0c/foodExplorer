import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
  height: 100dvh;
  margin: 0 auto;
  padding: 0 8rem;

  @media (min-width: 1024px) {
    & {
      flex-direction: row;
      justify-content: space-between;
      gap: 2rem;
    }
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: .8rem;
  margin-bottom: 7rem;

  > img {
    width: 4.3rem;
    height: 4.3rem;
  }

  > h1 {
    font-family: "Roboto", sans-serif;
    font-size: 3.7rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: 1024px) {
    & {
      margin: 0 auto;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  > h2 {
    display: none;
    font-family: "Poppins", sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > a {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: 1024px) {
    & {
      padding: 6.4rem;
      border-radius: 1.6rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};

      > h2 {
        display: block;
      }
    }
  }
`;