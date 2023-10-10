import { X ,MagnifyingGlass } from "@phosphor-icons/react";
import { Container, BtnClose, Nav, Options } from "./styles";
import { Input } from "../Input";
import { Footer } from "../Footer";

export function MenuMobal({ isAdmin = false, menuIsOpen, onCloseMenu }) {
  return(
    <Container data-menu-is-open={menuIsOpen}>
      <header>
        <BtnClose onClick={onCloseMenu}>
          <X/>
        </BtnClose>
        <h2>Menu</h2>
      </header>
      <Nav>
        <Input icon={MagnifyingGlass} placeholder="Busque por pratos ou ingredientes"/>
        <Options>
          {isAdmin && 
            <a href="/">Novo prato</a>
          }
          <a href="/">Sair</a>
        </Options>
      </Nav>
      <Footer/>
    </Container>
  );
}