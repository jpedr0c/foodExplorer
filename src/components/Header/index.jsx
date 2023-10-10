import { List, Receipt, SignOut } from "@phosphor-icons/react";
import { Container, Menu, Logo, Box, BtnSignOut, Cart } from "./styles";
import { Search } from "../Search";
import { Button } from "../Button";

export function Header({ isAdmin = false, onOpenMenu, orders = "0" }) {
  return(
    <Container
      $isadmin={isAdmin}
    >
      <Box>
        <Menu onClick={onOpenMenu}>
          <List/>
        </Menu>
        <Logo href="/">
            <img src="../../../src/assets/polygon.svg" alt="" />
            <div className="text">
              <h1>food explorer</h1>
              { isAdmin && <span>admin</span>}
            </div>
        </Logo>
        <Search className="desktop" placeholder="Busque por pratos ou ingredientes"/>
        <Button className="desktop" icon={isAdmin ? "" : Receipt} title={isAdmin ? "Novo prato" : `Pedidos (${orders})`} />
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