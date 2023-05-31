import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  line-height: 2.4rem;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: 0;
  border-radius: 0.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;