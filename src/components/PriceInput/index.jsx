import CurrencyInput from "react-currency-input-field";

import { Container } from "./styles";

export function PriceInput({ title, ...rest}) {
  return(
    <Container>
      {title && <label htmlFor="currencyInput">{title}</label>}
      <CurrencyInput
        required
        minLength={1}
        id="currencyInput"
        intlConfig={{ locale: 'pt-Br', currency: 'BRL'}}
        allowNegativeValue={false}
        decimalScale={2}
        {...rest}
      />
    </Container>
  );
}