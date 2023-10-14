import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh;
  overflow-x: hidden;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    justify-content: space-between;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
  max-width: 1200px;
  padding: 2rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    justify-content: space-between;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
  padding: 0 3.2rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 4.48rem;
  }

  div.box-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    div.box-inputs {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 3rem;
    }
  }
`;

export const Actions = styled.div`
  > button:nth-child(1) {
    display: none;
  }
  
  
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    justify-content: flex-end;
    gap: 3.2rem;
    
    > button {
      max-width: 20rem;
    }

    > button:nth-child(1) {
      display: flex;
      max-width: 15rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
    
  }
`;