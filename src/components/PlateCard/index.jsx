import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { Pencil } from "@phosphor-icons/react";
import { Container, ButtonTop, Actions } from "./styles";
import { Button } from "../Button";
import { Stepper } from "../Stepper";

export function PlateCard({ data, isAdmin = false }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  data.isFavorite = toggleFavorite;

  return (
    <Container
      data-is-admin={isAdmin}
    >
      {isAdmin ? (
        <ButtonTop>
          <Pencil />
        </ButtonTop>
      ) : (
        <ButtonTop onClick={toggleFavorite}>
          {isFavorite ? <AiFillHeart className="colored"/> : <AiOutlineHeart/>}
        </ButtonTop>
      )}
      <img src={data.image} alt="" />
      <h4>{data.title}</h4>
      <span>{data.description}</span>
      <p>R$ {data.price}</p>

      <Actions>
        <Stepper />
        <Button title="incluir" />
      </Actions>
    </Container>
  );
}