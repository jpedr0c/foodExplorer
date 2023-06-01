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
        <h1>Faça o login</h1>
        <Input
          id='email'
          labelContent="Email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />

        <Input
          id="password"
          labelContent="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />
        <Button title="Entrar" />
        {/* <Link to="/">Criar uma conta</Link> */}
        <a href="">Criar uma conta</a>
      </Form>
    </Container>
  )
}