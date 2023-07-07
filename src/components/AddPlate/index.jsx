import { Container } from './styles';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export function AddPlate({quantity = "01", ...rest }){
  return (
    <Container type="Button" {...rest}>
      <AiOutlineMinus size={30}/>
      {quantity}
      <AiOutlinePlus size={30}/>
    </Container>
  )
}