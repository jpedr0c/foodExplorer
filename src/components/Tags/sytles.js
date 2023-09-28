import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  width: 100%;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: .5rem;
  padding: .4rem .8rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
`;