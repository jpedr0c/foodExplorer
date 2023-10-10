import { Container, Text } from "./styles";

export function Textarea({ title, value, ...rest }) {
  return(
    <Container>
      <label htmlFor="description">{title}</label>
      <Text id="description" {...rest}>
        {value}
      </Text>
    </Container>
  );
}