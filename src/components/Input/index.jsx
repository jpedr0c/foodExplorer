import { Container } from "./styles";

export function Input({ icon: Icon, name, title, ...rest}) {
  return(
    <Container>
      {Icon && <Icon size={20}/>}
      <label htmlFor={name}>{title}</label>
      <input id={name} {...rest} />
    </Container>
  );
}