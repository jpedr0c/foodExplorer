import { Container, Banner } from "./sytles";
import { Header } from "../../components/Header";
import { PlateCard } from "../../components/PlateCard";
import { Dishes } from "../../components/Dishes";
import { Footer } from "../../components/Footer";

export function Home() {
  return(
    <Container>
      <Header/>
      <Banner>
        {/* TODO: Alterar o banner, não está da maneira correta. */}
        <img src="../../../src/assets/banner_home.png" alt="" />
        <div className="text">
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Banner>
      <Dishes title="Refeições">
        <PlateCard data={{image: "../../../src/assets/salada_ravanello.png", title: "Salada Ravanello", price: "49,90"}}/>
        <PlateCard isFavorite data={{image: "../../../src/assets/spaguetti_gambe.png", title: "Spaguetti Gambe", price: "79,90"}}/>
        <PlateCard data={{image: "../../../src/assets/torradas_parma.png", title: "Torradas de Parma", price: "25,90"}}/>
      </Dishes>

      <Dishes title="Pratos principais">
        <PlateCard data={{image: "../../../src/assets/salada_ravanello.png", title: "Salada Ravanello", price: "49,90"}}/>
        <PlateCard data={{image: "../../../src/assets/spaguetti_gambe.png", title: "Spaguetti Gambe", price: "79,90"}}/>
        <PlateCard data={{image: "../../../src/assets/torradas_parma.png", title: "Torradas de Parma", price: "25,90"}}/>
      </Dishes>

      <Dishes title="Bebidas">
        <PlateCard isFavorite data={{image: "../../../src/assets/expresso.png", title: "Expresso", price: "15,90"}}/>
        <PlateCard data={{image: "../../../src/assets/suco_maracuja.png", title: "Suco de maracujá", price: "13,90"}}/>
        <PlateCard data={{image: "../../../src/assets/drink.png", title: "Drink", price: "25,90"}}/>
      </Dishes>
      <Footer/>
    </Container>
  );
}