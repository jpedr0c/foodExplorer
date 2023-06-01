import { Container } from './styles';

export function Input({id, labelContent, ...rest}){
  return (
    <Container>
      <label htmlFor={id}>{labelContent}</label>
      <input {...rest} />
    </Container>
  )
}