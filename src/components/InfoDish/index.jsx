import { Container, Description, Information } from './styles';
import { BackButton } from '../BackButton';

export function InfoDish({data, ...rest}){
  return (
    <Container {...rest}>
      <div className="box">
        <BackButton />
        <Description>
          <img src="../../../images/Mask group-1.png" alt="Imagem de um prato" />
          <Information>
            <h1>{data.title}</h1>
            <p>{data.info}</p>
          </Information>
        </Description>
      </div>
    </Container>
  )
}