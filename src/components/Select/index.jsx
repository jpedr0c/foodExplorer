import React, { useState } from 'react';
import { CaretDown, CaretUp, Check } from "@phosphor-icons/react";
import { Container } from "./styles";

export function Select({ title, options }) {
  const [selectedValue, setSelectedValue] = useState("Selecione a categoria");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (label) => {
    setSelectedValue(label);
    setIsDropdownOpen(false);
  }

  return (
    <Container className="select">
      <div id="category-select">
        <label htmlFor="categories">{title}</label>
        <input type="checkbox" id="categories" checked={isDropdownOpen} onChange={() => setIsDropdownOpen(!isDropdownOpen)} />

        <div id="select-button">
          <div id="selected-value">{selectedValue}</div>

          <div id="chevrons">
            <CaretDown className="caret-down" />
            <CaretUp className="caret-up" />
          </div>
        </div>
      </div>

      <ul id="options">
        {options.map((option) => (
          <li className="option" key={option.id}>
            <input
              type="radio"
              name="category"
              value={option.id}
              data-label={option.label}
              onClick={() => handleOptionClick(option.label)}
            />
            <span className="label">{option.label}</span>
            <Check className="check" />
          </li>
        ))}
      </ul>
    </Container>
  );
};
