import { FiPlus, FiMinus } from "react-icons/fi"
import { Container } from "./styles";

export function Stepper() {
  return(
    <Container>
      <button id="minus"><FiMinus/></button>
      <span>01</span>
      <button id="plus"><FiPlus/></button>
    </Container>
  );
}