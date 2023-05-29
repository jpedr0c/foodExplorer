import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 56px;
  line-height: 24px;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: 0;
  border-radius: 5px;

  &:disabled {
    opacity: 0.5;
  }
`;