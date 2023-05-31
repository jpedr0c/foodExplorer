import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container, Form, Logo } from './styles';
// import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <Container>
      <Logo>
        <img src="../../../src/assets/logo.png" alt="Logo da empresa Food Explorer" />
      </Logo>
      <Form>
        <h1>Crie sua conta</h1>
        <Input
          id='Nome'
          type="text"
          placeholder="Exemplo: Maria da Silva"
        />

        <Input
          id='Email'
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />

        <Input
          id="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />
        <Button title="Criar conta" />
        <a href="">Já tenho uma conta</a>
      </Form>
    </Container>
  )
}