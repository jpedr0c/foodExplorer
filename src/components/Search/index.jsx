import { Container } from './styles';

export function Search({icon: Icon, ...rest}){
  return (
    <Container>
      {Icon && <Icon size={26}/>}
      <input {...rest} />
    </Container>
  )
}