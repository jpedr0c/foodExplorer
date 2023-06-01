import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { InfoDish } from '../../components/InfoDish';

export default function Dish(){
  return (
    <Container>
      <Header />
      <InfoDish></InfoDish>
      <Footer />
    </Container>
  )
}