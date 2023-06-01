import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-width: 40rem;
  height: 5.6rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding: 1.4rem 3rem;
  border-radius: 0.8rem;
  gap: 1.4rem;
  
  > input {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: 0;

    &:placeholder {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;