import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { InfoDish } from '../../components/InfoDish';
// import { BackButton } from '../../components/BackButton';

export default function Dish(){
  return (
    <Container>
      <Header />
      <InfoDish data={{
        title: "Salada Ravanello",
        info: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pao naan dá um toque especial.",
      }}/>
      <Footer />
    </Container>
  )
}