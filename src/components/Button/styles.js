import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  padding: .9rem 1.2rem;
  border: none;
  border-radius: .4rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 500;
`;