import { Link } from "react-router-dom";
import { Container, Logo, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return(
    <Container>
      <Logo to="/">
          <img src="../../../src/assets/polygon.svg" alt="" />
          <h1>food explorer</h1>
      </Logo>
      <Form>
        <h2>Faça login</h2>
        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          name="email"
          title="Email"
        />
        <Input
          placeholder="No mínimo 6 caracteres"
          type="password"
          name="password"
          title="Senha"
        />
        <Button title="Entrar"/>
        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}