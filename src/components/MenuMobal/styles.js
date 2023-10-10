import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  position: absolute;
  z-index: 2;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  > header {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    width: 100%;
    padding: 2.4rem 2.5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: "Roboto", sans-serif;
      font-size: 2.1rem;
    }
  }
  
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="true"]{
    transform: translateX(0);
  }

`;

export const BtnClose = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > svg {
    font-size: 3.2rem;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 3.6rem;
  padding: 2rem 2.8rem;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  > a {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-size: 2.4rem;
    padding: 1rem;
    /* line-height: 140%; */
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;