import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;

  > label {
    font-family: 'Roboto', serif;
    font-weight: 400;
    font-size: 1.6rem;
    align-self: flex-start;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  
  > input {
    font-family: 'Roboto', sans-serif;
    height: 5.6rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: 0;
    border-radius: 0.8rem;

    &:placeholder {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;