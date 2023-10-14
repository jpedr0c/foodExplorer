import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.section`
  width: 100%;
  margin-bottom: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  .swiper {
    width: 100%;
    position: relative;
  }

  .swiper-slide{
    width: fit-content;
  }

  .swiper-button-next {
    justify-content: flex-end;
    padding-right: 1rem;
    right: 0;
    background: linear-gradient(90deg, rgba(0,10,15,0) 0%, rgba(0,10,15,1) 70%);
  }

  .swiper-button-prev {
    justify-content: flex-start;
    padding-left: 1rem;
    left: 0;
    background: linear-gradient(90deg, rgba(0,10,15,1) 0%, rgba(0,10,15,0) 70%);
  }

  .swiper-button-next,
  .swiper-button-prev{
    display: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    height: 100%;
    width: 8%;
    top: 2.2rem;

    &::after {
      font-size: 2.8rem;
    }
  }
  
  > h3 {
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 2.4rem;
  }
  
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .swiper-button-next,
    .swiper-button-prev {
      display: flex;
      width: 10%;
    }

    .swiper-button-disabled {
      display: none;
    }

    > h3 {
      font-size: 2.5rem;
    }
  }
`;