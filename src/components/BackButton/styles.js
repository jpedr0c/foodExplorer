import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 3.4rem;
  padding: 5rem 0 3rem 7rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  > svg {
    cursor: pointer;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  > a {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 3.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`;