import { CaretLeft } from "@phosphor-icons/react";
import { Container } from "./styles";

export function BackButton() {
  return(
    <Container to="/">
      <CaretLeft/>
      voltar
    </Container>
  );
}