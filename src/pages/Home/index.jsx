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
        <figure>
          <img src="../../../src/assets/banner_home.png" alt="" />
        </figure>
        <div className="wrapper">
          <div className="content">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
      </Banner>
      <Box>
        <Dishes 
          title="Refeições"
          dishes={[
            {
              id: "1",
              title: "Salada Ravanello",
              description: "Massa fresca com camarões e pesto",
              price: "49,90",
              image: "../../../src/assets/salada_ravanello.png"
            },
            {
              id: "2", 
              title: "Spaguetti Gambe", 
              description: "Massa fresca com camarões e pesto.", 
              price: "79,90",
              image: "../../../src/assets/spaguetti_gambe.png"
            },
            {
              id: "3", 
              title: "Torradas de Parma", 
              description: "Massa fresca com camarões e pesto.", 
              price: "25,90",
              image: "../../../src/assets/torradas_parma.png"
            },
            {
              id: "4",
              title: "Salada Ravanello",
              description: "Massa fresca com camarões e pesto",
              price: "49,90",
              image: "../../../src/assets/salada_ravanello.png"
            },
            {
              id: "5", 
              title: "Spaguetti Gambe", 
              description: "Massa fresca com camarões e pesto.", 
              price: "79,90",
              image: "../../../src/assets/spaguetti_gambe.png"
            },
            {
              id: "6", 
              title: "Torradas de Parma", 
              description: "Massa fresca com camarões e pesto.", 
              price: "25,90",
              image: "../../../src/assets/torradas_parma.png"
            }
          ]}
        >
        </Dishes>

        <Dishes 
          title="Pratos principais"
          dishes={[
            {
              id: "7", 
              title: "Salada Ravanello", 
              description: "Massa fresca com camarões e pesto.", 
              price: "49,90",
              image: "../../../src/assets/salada_ravanello.png"
            },
            {
              id: "8", 
              title: "Spaguetti Gambe", 
              description: "Massa fresca com camarões e pesto.", 
              price: "79,90",
              image: "../../../src/assets/spaguetti_gambe.png"
            },
            {
              id: "9", 
              title: "Torradas de Parma", 
              description: "Massa fresca com camarões e pesto.", 
              price: "25,90",
              image: "../../../src/assets/torradas_parma.png"
            },
            {
              id: "10", 
              title: "Salada Ravanello", 
              description: "Massa fresca com camarões e pesto.", 
              price: "49,90",
              image: "../../../src/assets/salada_ravanello.png"
            },
            {
              id: "11", 
              title: "Spaguetti Gambe", 
              description: "Massa fresca com camarões e pesto.", 
              price: "79,90",
              image: "../../../src/assets/spaguetti_gambe.png"
            },
            {
              id: "12", 
              title: "Torradas de Parma", 
              description: "Massa fresca com camarões e pesto.", 
              price: "25,90",
              image: "../../../src/assets/torradas_parma.png"
            },
          ]}
        >
        </Dishes>

        <Dishes 
          title="Bebidas"
          dishes={[
            {
              id: "13", 
              title: "Expresso", 
              description: "Massa fresca com camarões e pesto.", 
              price: "15,90",
              image: "../../../src/assets/expresso.png"
            },
            {
              id: "14", 
              title: "Suco de maracujá", 
              description: "Massa fresca com camarões e pesto.", 
              price: "13,90",
              image: "../../../src/assets/suco_maracuja.png"
            },
            {
              id: "15", 
              title: "Drink", 
              description: "Massa fresca com camarões e pesto.", 
              price: "25,90",
              image: "../../../src/assets/drink.png"
            },
            {
              id: "16", 
              title: "Expresso", 
              description: "Massa fresca com camarões e pesto.", 
              price: "15,90",
              image: "../../../src/assets/expresso.png"
            },
            {
              id: "17", 
              title: "Suco de maracujá", 
              description: "Massa fresca com camarões e pesto.", 
              price: "13,90",
              image: "../../../src/assets/suco_maracuja.png"
            },
            {
              id: "18", 
              title: "Drink", 
              description: "Massa fresca com camarões e pesto.", 
              price: "25,90",
              image: "../../../src/assets/drink.png"
            },
          ]}
        >
        </Dishes>
      </Box>
      <Footer/>
    </Container>
  );
}