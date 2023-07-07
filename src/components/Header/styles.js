import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-height: 7.5rem;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 2.4rem 12.3rem;
  gap: 4rem;

  > a > img {
    max-width: 18.6rem;
    max-height: 3rem;
    cursor: pointer;
  }

  > a {
    display: flex;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    font-size: 3.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    cursor: pointer;
  }
`;