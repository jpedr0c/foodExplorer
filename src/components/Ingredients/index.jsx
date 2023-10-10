import { Children } from "react";
import { Container } from "./styles";

export function Ingredients({ children }) {
  return(
    <Container>
      <label htmlFor="ingredients">Ingredientes</label>
      <div id="ingredients" className="box">
        {children}
      </div>
    </Container>
  );
}