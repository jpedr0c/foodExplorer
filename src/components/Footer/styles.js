import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  max-height: 7.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 12.3rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > img {
    max-width: 18.6rem;
    cursor: pointer;
  }

  > span {
    font-family: 'Roboto';
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`;