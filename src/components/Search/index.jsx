import { MagnifyingGlass } from "@phosphor-icons/react";
import { Container, BoxInput } from "./styles";

export function Search({...rest }) {
  return(
    <Container {...rest}>
      <BoxInput>
        <MagnifyingGlass size={20}/>
        <input {...rest} />
      </BoxInput>
    </Container>
  );
}