import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  > label {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const Text = styled.textarea`
  width: 100%;
  height: 17rem;
  border: none;
  resize: none;
  padding: 1.4rem;
  border-radius: .8rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 1.6rem;
  }
`;