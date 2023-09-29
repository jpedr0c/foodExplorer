import { Container, Logo, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return(
    <Container>
      <Logo href="/">
          <img src="../../../src/assets/polygon.svg" alt="" />
          <h1>food explorer</h1>
      </Logo>
      <Form>
        <h2>Crie sua conta</h2>
        <Input
          placeholder="Exemplo: João Pedro"
          type="text"
          name="name"
          title="Seu nome"
        />
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
        <Button title="Criar conta"/>
        <a href="/">Já tenho uma conta</a>
      </Form>
    </Container>
  );
}