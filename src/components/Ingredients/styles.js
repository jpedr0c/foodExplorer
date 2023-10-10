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

  > div.box{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    padding: .8rem 1.2rem;
    border-radius: .8rem;

    & > * {
      flex-basis: calc(100% / 4);
    }
  }
`;