import { Container, Box, Logo } from "./styles";

export function Footer() {
  return(
    <Container>
      <Box>
        <Logo to="/">
            <img src="../../../src/assets/polygon_gray.svg" alt="" />
            <h1>food explorer</h1>
        </Logo>
        <span>© 2023 - Todos os direitos reservados.</span>
      </Box>
    </Container>
  );
}