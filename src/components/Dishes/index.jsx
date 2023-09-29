import { Container, Carousel } from "./styles";

export function Dishes({ title, children }) {
  return(
    <Container>
      <h3>{title}</h3>
      <Carousel>
        {children}
      </Carousel>
    </Container>
  );
}