import { Container, Logo } from "./styles";

export function Footer() {
  return(
    <Container>
      <Logo href="/">
          <img src="../../../src/assets/polygon_gray.svg" alt="" />
          <h1>food explorer</h1>
      </Logo>
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  );
}