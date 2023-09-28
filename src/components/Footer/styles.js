import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2.4rem;
  margin-top: 3.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
  }
`;

export const Logo = styled.a`
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