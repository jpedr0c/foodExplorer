import { List, Receipt, SignOut } from "@phosphor-icons/react";
import { Container, Menu, Logo, Box, BtnSignOut, Cart } from "./styles";
import { Link } from "react-router-dom";
import { Search } from "../Search";
import { Button } from "../Button";
export function Header({ isAdmin = false, onOpenMenu, orders = "0" }) {
 return(
    <Container>
      <Box>
        <Menu onClick={onOpenMenu}>
          <List/>
        </Menu>
        <Logo to="/">
          <img src="../../../src/assets/polygon.svg" alt="" />
          <div className="text">
            <h1>food explorer</h1>
            { isAdmin && <span>admin</span> }
          </div>
        </Logo>
        <Search className="desktop" placeholder="Busque por pratos ou ingredientes"/>
        <Link to={isAdmin ? "/new" : ""} className="desktop">
          <Button icon={isAdmin ? "" : Receipt} title={isAdmin ? "Novo prato" : `Pedidos (${orders})`} />
        </Link>
        <BtnSignOut className="desktop">
          <SignOut/>
        </BtnSignOut>
        {!isAdmin && 
        <Cart>
          <Receipt/>
          <span>{orders}</span>
        </Cart>}
      </Box>
    </Container>
 );
}