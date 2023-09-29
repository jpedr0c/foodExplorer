import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { PiPencilSimple } from "react-icons/pi"
import { Container, Actions } from "./styles";
import { Button } from "../Button";
import { Stepper } from "../Stepper";

export function PlateCard({ data, isFavorite, isAdmin = false }) {
  return(
    <Container>
      { isAdmin ? (<PiPencilSimple/>) : (isFavorite ? <AiFillHeart/> : <AiOutlineHeart/>) }
      <img src={data.image} alt="" />
      <h4>{data.title}</h4>
      <p>R$ {data.price}</p>

      {
        !isAdmin &&
        <Actions>
          <Stepper/>
          <Button title="incluir"/>
        </Actions>
      }
    </Container>
  );
}