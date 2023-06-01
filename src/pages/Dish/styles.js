import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  max-height: 10.4rem;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 2.4rem 12.3rem;
  gap: 3.2rem;

  > img {
    max-width: 18.6rem;
    max-height: 3rem;
  }

  > a {
    display: flex;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > svg {
    font-size: 18rem;
  }
`;