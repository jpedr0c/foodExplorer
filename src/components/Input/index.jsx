import { Container } from "./styles";

export function Input({ name, title, ...rest}) {
  return(
    <Container>
      {title && <label htmlFor={name}>{title}</label>}
      <input id={name} {...rest} />
    </Container>
  );
}