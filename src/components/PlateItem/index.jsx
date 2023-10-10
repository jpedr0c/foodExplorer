import { X, Plus } from "@phosphor-icons/react"; 
import { Container } from "./styles";

export function PlateItem({ isNew, value, onClick, ...rest }) {
  return(
    <Container isNew={isNew}>
      <input 
        type="text" 
        value={value}
        readOnly={!isNew}
        {...rest}
      />
      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <Plus/> : <X/>}
      </button>
    </Container>
  );
}