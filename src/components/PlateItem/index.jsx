import { X, Plus } from "@phosphor-icons/react"; 
import { Container } from "./styles";

export function PlateItem({ isNew = false, value, onClick, ...rest }) {
  return(
    <Container isNew={isNew}>
      <input 
        type="text" 
        value={value}
        readOnly={!isNew}
        autoComplete="off"
        maxLength={35}
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