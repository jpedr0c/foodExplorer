import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* height: 12rem; */
  padding: 2.4rem 2.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
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

`;

export const Receipt = styled.div`
  position: relative;
  cursor: pointer;

  > svg {
    width: 3.2rem;
    height: 3.2rem;
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
`;