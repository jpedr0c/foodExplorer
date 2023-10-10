import { useState } from "react";
import { Container, Banner, Box } from "./sytles";
import { Header } from "../../components/Header";
import { PlateCard } from "../../components/PlateCard";
import { Dishes } from "../../components/Dishes";
import { Footer } from "../../components/Footer";
import { MenuMobal } from "../../components/MenuMobal";

export function Home({ isAdmin = false }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return(
    <Container>
      <MenuMobal
        isAdmin={isAdmin}
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header isAdmin={isAdmin} onOpenMenu={() => setMenuIsOpen(true)}/>
      <Banner>
        {/* TODO: Alterar o banner, não está da maneira correta. */}
        <img src="../../../src/assets/banner_home.png" alt="" />
        <div className="text">
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Banner>
      <Box>
        <Dishes title="Refeições">
          <PlateCard isAdmin={isAdmin} data={{
            id: "1", 
            image: "../../../src/assets/salada_ravanello.png", 
            title: "Salada Ravanello", 
            description: "Massa fresca com camarões e pesto.", 
            price: "49,90"
          }}/>
          <PlateCard isAdmin={isAdmin} data={{
            id: "2", 
            image: "../../../src/assets/spaguetti_gambe.png", 
            title: "Spaguetti Gambe", 
            description: "Massa fresca com camarões e pesto.", 
            price: "79,90"
          }}/>
          <PlateCard isAdmin={isAdmin} data={{
            id: "3", 
            image: "../../../src/assets/torradas_parma.png", 
            title: "Torradas de Parma", 
            description: "Massa fresca com camarões e pesto.", 
            price: "25,90"
          }}/>
        </Dishes>

        <Dishes title="Pratos principais">
          <PlateCard isAdmin={isAdmin} data={{
            id: "4", 
            image: "../../../src/assets/salada_ravanello.png", 
            title: "Salada Ravanello", 
            description: "Massa fresca com camarões e pesto.", 
            price: "49,90"
          }}/>
          <PlateCard isAdmin={isAdmin} data={{
            id: "5", 
            image: "../../../src/assets/spaguetti_gambe.png", 
            title: "Spaguetti Gambe", 
            description: "Massa fresca com camarões e pesto.", 
            price: "79,90"
          }}/>
          <PlateCard isAdmin={isAdmin} data={{
            id: "6", 
            image: "../../../src/assets/torradas_parma.png", 
            title: "Torradas de Parma", 
            description: "Massa fresca com camarões e pesto.", 
            price: "25,90"
          }}/>
        </Dishes>

        <Dishes title="Bebidas">
          <PlateCard isAdmin={isAdmin} data={{
            id: "7", 
            image: "../../../src/assets/expresso.png", 
            title: "Expresso", 
            description: "Massa fresca com camarões e pesto.", 
            price: "15,90"
          }}/>
          <PlateCard isAdmin={isAdmin} data={{
            id: "8", 
            image: "../../../src/assets/suco_maracuja.png", 
            title: "Suco de maracujá", 
            description: "Massa fresca com camarões e pesto.", 
            price: "13,90"
          }}/>
          <PlateCard isAdmin={isAdmin} data={{
            id: "9", 
            image: "../../../src/assets/drink.png", 
            title: "Drink", 
            description: "Massa fresca com camarões e pesto.", 
            price: "25,90"
          }}/>
        </Dishes>
      </Box>
      <Footer/>
    </Container>
  );
}