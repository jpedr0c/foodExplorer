import { useRef } from "react";
import { UploadSimple } from "@phosphor-icons/react";
import { Container, BoxInput } from "./styles";

export function InputFile({ name, title }) {
  const spanRef = useRef(null);

  const handleFileChange = (event) => {
    const inputFile = event.target;
    const fileName = inputFile.files[0] ? inputFile.files[0].name : "Selecione uma imagem";

    if (spanRef.current)
      spanRef.current.textContent = fileName;
  };

  return (
    <Container>
      <label htmlFor={name}>
        {title}
        <BoxInput>
          <UploadSimple />
          <input
            id={name}
            type="file"
            onChange={handleFileChange}
          />
          <span ref={spanRef}>Selecione uma imagem</span>
        </BoxInput>
      </label>
    </Container>
  );
}