import { Container } from './styles';
import { Search } from '../../components/Search';
import { Button } from '../../components/Button';
import { IoReceipt } from 'react-icons/io5';
import { BiSearch, BiExit } from 'react-icons/bi';

export default function Dish(){
  return (
     <Container>
      <img src="../../../src/assets/logo.png" alt="Logo do Food Explorer" />
      <Search
        icon={BiSearch}
        id="search"
        type="text"
        placeholder="Busque por pratos ou ingredientes"
      />
      <a href="">Meus favoritos</a>
      <a href="">Histórico de pedidos</a>
      <Button 
        icon={IoReceipt}
        title="Pedidos (0)"
      />
      <BiExit />
     </Container>
  )
}