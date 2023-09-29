import styled from "styled-components";

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

  > svg {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    font-size: 2.4rem;
    cursor: pointer;
  }

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

  > p {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;