import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100dvh;
  overflow-x: hidden;
  /* @media (min-width: 768px){
    &{
      background-color: red;
    }
  } */
`;

export const Plate = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 8.5rem;

  > img {
    width: 26.4rem;
    height: 26.4rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h2 {
    font-family: "Poppins", sans-serif;
    font-size: 2.7rem;
    font-weight: 500;
    margin-top: 1.6rem;
  }

  > p {
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    text-align: center;
    margin: 2.4rem 0;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 4.8rem;
`;