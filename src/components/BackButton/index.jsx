import { Container } from './styles';
import { AiOutlineLeft } from 'react-icons/ai';

export function BackButton(){
  return (
    <Container>
      <AiOutlineLeft />
      <a href="/">voltar</a>
    </Container>
  )
}