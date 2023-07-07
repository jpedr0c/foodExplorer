import { Container, DishBox, Informations } from './styles';
import { Button } from '../Button';
import { AddPlate } from '../AddPlate';

export function InfoDish({data, ...rest}){
  return (
    <Container {...rest}>
      <div className="box">
        <DishBox>
          <img src="../../../images/Mask group.png" alt="Imagem de um prato" />
          <Informations>
            <h1>{data.title}</h1>
            <p>{data.info}</p>
            <AddPlate />
            <Button 
              title="incluir - R$ 25,00"
            />
          </Informations>
        </DishBox>
      </div>
    </Container>
  )
}