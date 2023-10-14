import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  user-select: none;

  #category-select label {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  #select-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: .5rem;
    margin-top: 1rem;
    padding: 1.4rem;
  }

  #selected-value {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
  }

  #chevrons svg {
    width: 2.2rem;
    height: 2.2rem;
  }

  #chevrons {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  #chevrons .caret-up {
    display: none;
  }

  #categories:focus + #select-button,
  #categories:checked + #selected-button {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  }

  #categories:checked + #select-button #chevrons .caret-down{
    display: none;
  }

  #categories:checked + #select-button #chevrons .caret-up{
    display: block;
  }

  #category-select {
    position: relative;
  }

  #categories {
    all: unset;
    position: absolute;
    inset: 0;
    cursor: pointer;
    z-index: 3;
  }

  #options {
    visibility: hidden;
    max-height: 0;
    width: calc(100% + 2px);
    position: absolute;
    top: 7.8rem;
    left: -1px;
    margin-top: .4rem;
    border-radius: .5rem;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }

  .option {
    visibility: hidden;
    position: relative;
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: 1.2rem;
    width: 100%;
  }

  .option .label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
  }

  .option svg {
    display: none;
    width: 1.2rem;
    height: 1.2rem;
    margin-left: auto;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  .option:has(input:checked),
  .option:hover {
    background-color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  .option:has(input:focus) {
    outline: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
  }

  .option:has(input:checked) .check {
    display: block;
  }

  .option input[type="radio"] {
    all: unset;
    position: absolute;
    inset: 0;
    cursor: pointer;
  }

  #category-select:has(#categories:checked) + #options{
    visibility: visible;
    max-height: 20rem;

    .option {
      visibility: visible;
    }
  }
`;