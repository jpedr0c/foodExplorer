import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 110.6rem;
  height: 100vh;
  margin: 0 auto;
  overflow-y: hidden;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 47.6rem;
  max-height: 67rem;
  padding: 6.4rem;
  margin: 0 auto;
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  font-family: 'Poppins', sans-serif;

  > h1 {
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > a {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const Logo = styled.div`
  flex: 1;

  > img {
    max-width: 32.4rem;
    max-height: 4.8rem;
  }
`;