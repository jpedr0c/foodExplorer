import React, { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import { Container, BtnCount } from "./styles";

export function Stepper({ isAdmin = false }) {
  const [count, setCount] = useState(1); // Inicializa com 1 como valor padrão

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1); // Incrementa o valor atual
  };

  const handleDecrement = () => {
    if (count > 1) {
      // Verifica se o valor atual é maior que 1 antes de decrementar
      setCount((prevCount) => prevCount - 1); // Decrementa o valor atual
    }
  };

  return(
    !isAdmin && 
      <Container>
      <BtnCount onClick={handleDecrement}>
        <Minus/>
      </BtnCount>
      <span>{count.toString().padStart(2, "0")}</span>
      <BtnCount onClick={handleIncrement}>
        <Plus/>
      </BtnCount>
    </Container>  
  );
}