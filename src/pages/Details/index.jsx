import { PiReceipt } from "react-icons/pi"
import { Container, Plate, Info, Actions } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Stepper } from '../../components/Stepper';
import { Tags } from '../../components/Tags';
import { BackButton } from '../../components/BackButton';

export function Details() {
  return(
    <Container>
      <Header/>
      <BackButton/>
      <Plate>
        <img src="../../../src/assets/salada_ravanello.png" alt="" />
        <Info>
          <h2>Salada Ravanello</h2>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
          <Tags data={[
            {id: "1", name: "alface"}, 
            {id: "2", name: "cebola"}, 
            {id: "3", name: "pão naan"}, 
            {id: "4", name: "pepino"}, 
            {id: "5", name: "rabanete"},
            {id: "6", name: "tomate"},
          ]}/>
          <Actions>
            <Stepper/>
            <Button title="pedir ∙ R$ 25,00" icon={PiReceipt}/>
          </Actions>
        </Info>
      </Plate>
      <Footer/>
    </Container>
  );
}