import { Container, Logout } from './styles';
import { Search } from '../../components/Search';
import { Button } from '../../components/Button';
import { IoReceipt } from 'react-icons/io5';
import { BiSearch, BiExit } from 'react-icons/bi';

export function Header(){
  return (
    <Container>
      <a href=""><img src="../../../src/assets/logo.png" alt="Logo do Food Explorer" /></a>
      <Search
        icon={BiSearch}
        id="search"
        type="text"
        placeholder="Busque por pratos ou ingredientes"
      />

      {/* TODO: Colocar esses dois links para a milha extra */}
      {/* <a href="">Meus favoritos</a>
      <a href="">Histórico de pedidos</a> */}
      {/* <nav>
        <ul>
          <li><a href="">Meus favoritos</a></li>
          <li><a href="">Histórico de pedidos</a></li>
          <li><Button 
          icon={IoReceipt}
          title="Pedidos (0)"
        /></li>
        </ul>
      </nav> */}
      <Button 
        icon={IoReceipt}
        title="Pedidos (0)"
      />
      <Logout>
        <BiExit />
      </Logout>
    </Container>
  )
}