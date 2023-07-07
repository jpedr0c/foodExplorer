import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  .box{
    min-width: 112rem;
  }
`;

export const DishBox = styled.div`
  max-width: 85rem;
  height: 56vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 4.7rem;

  > img {
    max-width: 28rem;
    max-height: 28rem;
  }
`;

export const Information = styled.div`
  min-width: 66rem;
  max-height: 30rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: 'Poppins', sans-serif;

  > h1 {
    font-size: 3.5rem;
    line-height: 5.6rem;
    font-weight: 500;
  }

  > p {
    font-size: 2rem;
    line-height: 3.4rem;
  }
`;