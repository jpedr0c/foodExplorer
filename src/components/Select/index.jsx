import { CaretDown, CaretUp, Check } from "@phosphor-icons/react";
import { Container } from "./styles";

export function Select({ title }) {
  return(
    <Container className="select">
      <div id="category-select">
        <label htmlFor="categories">{title}</label>
        <input type="checkbox" id="categories" />

        <div id="select-button">
          <div id="selected-value">Selecione a categoria</div>

          <div id="chevrons">
            <CaretDown className="caret-down"/>
            <CaretUp className="caret-up"/>
          </div>
        </div>
      </div>

      <ul id="options">
        <li className="option">
          <input 
            type="radio" 
            name="category" 
            value="Refeições" 
            data-label="Refeições"
          />
          <span className="label">Refeições</span>
          <Check className="check"/>
        </li>
        <li className="option">
          <input 
            type="radio" 
            name="category" 
            value="Pratos principais" 
            data-label="Pratos principais"
          />
          <span className="label">Pratos principais</span>
          <Check className="check"/>
        </li>
        <li className="option">
          <input 
            type="radio" 
            name="category" 
            value="Bebidas" 
            data-label="Bebidas"
          />
          <span className="label">Bebidas</span>
          <Check className="check"/>
        </li>
      </ul>
      

      {/* <select name="categories" id="categories">
        {options.map( option => <option key={option.id} value={option.name}>{option.name}</option>)}
      </select> */}
    </Container>
  );
}