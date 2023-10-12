import { X, Plus } from "@phosphor-icons/react"; 
import { Container } from "./styles";

export function PlateItem({ isNew = false, value, onClick, onKeyDown, ...rest }) {
  
  function handleEnterPress(e) {
    if (e.key == "Enter")
      onClick();
  }

  return(
    <Container isNew={isNew}>
      <input 
        type="text" 
        value={value}
        readOnly={!isNew}
        autoComplete="off"
        maxLength={35}
        onKeyDown={handleEnterPress}
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