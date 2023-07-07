import styled from 'styled-components';

export const Container = styled.button`
  max-width: 20rem;
  height: 4.8rem;
  line-height: 2.4rem;
  padding: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
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