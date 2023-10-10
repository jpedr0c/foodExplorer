import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  overflow-x: hidden;
`;

export const Banner = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding: 2.5rem;
  width: 100%;
  max-width: 1444px;
  height: 120px;
  margin: 4rem auto;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 1rem;

  > img {
    margin-left: -7rem;
    margin-top: -3rem;
  }

  > .text{
    width: 50.5%;
    h2 {
      font-family: "Poppins", sans-serif;
      font-size: 1.8rem;
      font-weight: 700;
    }

    P {
      font-family: "Poppins", sans-serif;
      font-size: 1.2rem;
    }
  }
`;

export const Box = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1444px;
`;