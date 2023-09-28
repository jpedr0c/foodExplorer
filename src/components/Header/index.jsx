import { FiMenu } from "react-icons/fi"
import { PiReceipt } from "react-icons/pi"
import { Container, Logo, Receipt } from "./styles";

export function Header({ isAdmin = false }) {
  return(
    <Container
      $isadmin={isAdmin}
    >
      <FiMenu/>
      <Logo href="/">
          <img src="../../../src/assets/polygon.svg" alt="" />
          <div className="text">
            <h1>food explorer</h1>
            { isAdmin && <span>admin</span>}
          </div>
      </Logo>
      {!isAdmin && 
      <Receipt>
        <PiReceipt/>
        <span>0</span>
      </Receipt>}
      
    </Container>
  );
}