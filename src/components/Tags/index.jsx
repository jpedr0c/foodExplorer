import { Container, Tag } from "./sytles";

export function Tags({ data }) {
  return(
    <Container>
      {data.map( tag => <Tag key={tag.id}>{tag.name}</Tag>)}
    </Container>
  );
}