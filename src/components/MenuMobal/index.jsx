import { Link } from "react-router-dom";
import { X } from "@phosphor-icons/react";
import { Container, BtnClose, Nav, Options } from "./styles";
import { Search } from "../Search";
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
        <Search className="search" placeholder="Busque por pratos ou ingredientes"/>
        <Options>
          {isAdmin && 
            <Link to="/new">Novo prato</Link>
          }
          <Link to="/">Sair</Link>
        </Options>
      </Nav>
      <Footer/>
    </Container>
  );
}