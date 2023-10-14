import { useState } from "react";
import { Receipt } from "@phosphor-icons/react";
import { Container, Box, Plate, Info, Actions } from './styles';
import { MenuMobal } from "../../components/MenuMobal";
import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';
import { Tags } from '../../components/Tags';
import { Stepper } from '../../components/Stepper';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Link } from "react-router-dom";


export function Details({ isAdmin = false }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return(
    <Container>
      <MenuMobal
        isAdmin={isAdmin}
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header isAdmin={isAdmin} onOpenMenu={() => setMenuIsOpen(true)}/>
      <Box>
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

            {isAdmin ? 
              <Actions isAdmin={isAdmin}>
                <Link to="/edit/1" className="edit-button">
                  <Button title="Editar prato" icon={Receipt}/>
                </Link>
              </Actions>
              :
              <Actions isAdmin={isAdmin}>
                <Stepper/>
                <Button title="pedir ∙ R$ 25,00" icon={Receipt}/>
              </Actions>
            }
          </Info>
        </Plate>
      </Box>
      <Footer/>
    </Container>
  );
}