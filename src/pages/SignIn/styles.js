import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1368px;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  padding: 74px;
  max-height: 540px;
  margin: 141px 108px 141px 0;
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > h1 {
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const Logo = styled.div`
  flex: 1;
  text-align: center;

  > img {
    max-width: 324px;
    max-height: 48px;
  }
`;