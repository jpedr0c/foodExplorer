import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/edit/1" className="pencil">
            <Pencil />
          </Link>
        </ButtonTop>
      ) : (
        <ButtonTop onClick={toggleFavorite}>
          {isFavorite ? <AiFillHeart className="colored"/> : <AiOutlineHeart/>}
        </ButtonTop>
      )}
      <Link to="/details/1" className="clickable">
        <img src={data.image} alt="" /> 
        <h4>{data.title}</h4>
      </Link>
      <span>{data.description}</span>
      <p>R$ {data.price}</p>

      <Actions>
        <Stepper />
        <Button title="incluir" />
      </Actions>
    </Container>
  );
}