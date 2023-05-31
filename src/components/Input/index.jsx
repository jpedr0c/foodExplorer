import { Container } from './styles';

export function Input({id, ...rest}){
  return (
    <Container>
      <label htmlFor={id}>{id}</label>
      <input {...rest} />
    </Container>
  )
}