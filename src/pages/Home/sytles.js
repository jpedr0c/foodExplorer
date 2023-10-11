import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100dvh;
  overflow-x: hidden;
`;

export const Banner = styled.div`
  position: relative;
  width: min(100%, 42.8rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin: 3.2rem auto 6.2rem;

  > figure {
    position: relative;
    min-width: 18rem;
    height: 15rem;

    img {
      position: absolute;
      top: -3rem;
      left: -2.5rem;
      width: 22.1rem;
      height: 18rem;
      object-fit: cover;
      object-position: 0 2.5rem;
      transform: scaleX(-1);
      filter: brightness(0.8);
    }
  }

  div {
    width: min(100%, 25rem);
    font-family: "Poppins", sans-serif;
    margin-top: 2rem;

    h2 {
      font-size: 1.8rem;
      font-weight: 700;
    }

    p {
      font-size: 1.2rem;
    }

    &::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: -10;
      width: 93%;
      height: 82%;
      border-radius: .8rem;
      background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    }
  }

  @media(min-width: 570px) {
    width: min(100%, 50rem);
    height: 20rem;

    > figure {
      img {
        top: -4.5rem; 
        width: 27rem;
        height: 22rem;
      }
    }

    > .wrapper {
      display: flex;
      justify-content: center;

      .content {
        h1 {
          font-size: 2.4rem;
        }
  
        p {
          font-size: 1.4rem;
        }
      }
    }
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: min(100%, 70rem);
    /* left: -1.5rem; */
    gap: 0;

    > figure {
      min-width: 25rem;

      img {
        width: 28.1rem;
        height: 22rem;
      }
    }

    > .wrapper {
      display: flex;
      justify-content: center;
      flex: 1;

      .content {
        width: 32rem;

        h1 {
          font-size: 3rem;
        }
  
        p {
          font-size: 1.6rem;
        }
      }
    }
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: min(100%, 95rem);
    left: -2.5rem;

    > figure {
      min-width: 40rem;

      img {
        top: -7.5rem;
        left: 1rem;
        width: 40rem;
        height: 25rem;
        object-position: 0 2.5rem;
      }
    }

    > .wrapper {
      flex: 1;

      .content {
        width: fit-content;

        h1 {
          font-size: clamp(3rem, 2rem + 4vw, 10rem);
        }
  
        p {
          font-size: clamp(1rem, 1rem + 0.5vw, 3rem);
        }
      }
    }
  }

  @media(min-width: 1280px) {
    width: min(100%, 120rem);

    > figure {
      img {
        top: -7.5rem;
        left: 1rem;
        width: 40rem;
        height: 25rem;
      }
    }

    > .wrapper {
      flex: 1;

      .content {
        width: fit-content;
      }
    }
  }
`;

export const Box = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1444px;
`;