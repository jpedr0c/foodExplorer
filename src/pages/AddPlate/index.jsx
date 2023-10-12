import { useState } from "react";
import { Container, Box, Form, Actions } from "./styles";
import { MenuMobal } from "../../components/MenuMobal";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PriceInput } from "../../components/PriceInput";
import { Textarea } from "../../components/Textarea";
import { InputFile } from "../../components/InputFile";
import { Select } from "../../components/Select";
import { PlateItem } from "../../components/PlateItem";
import { Ingredients } from "../../components/Ingredients";

export function AddPlate() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  // const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  function handleNewIngredient() {
    if (!newIngredient)
      return;
    setIngredients((prevIngredients) => [...prevIngredients , newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(ingredient) {
    setIngredients((prevIngredients) => prevIngredients.filter((item) => item !== ingredient));
  }

  return(
    <Container>
      <MenuMobal
        isAdmin
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header isAdmin onOpenMenu={() => setMenuIsOpen(true)}/>
      <Box>
        <BackButton/>
        <Form>
          <h2>Adicionar prato</h2>
          <div className="box-inputs">
            <InputFile
              type="file"
              name="image"
              title="Imagem do prato"
            />
            <Input
              placeholder="Ex: Salada Caesar"
              type="text"
              name="name"
              title="Nome"
            />
            <Select title="Categoria" options={[
              {id: "1", label: "Refeições"},
              {id: "2", label: "Pratos principais"},
              {id: "3", label: "Bebidas"},
              ]}
            />
          </div>
          
          <div className="box-inputs">
            <Ingredients>
              {ingredients.map((ingredient, id) => (
                <PlateItem
                  key={id} 
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                  style={{ width: `${ingredient.length / 1.15}rem`}}
                />
              ))}
              <PlateItem 
                isNew
                placeholder="Adicionar"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleNewIngredient}
                style={{ width: `${newIngredient.length / 1.15}rem`}}
              />
            </Ingredients>
            <PriceInput
              className="price-input" 
              title="Preço"
              placeholder="R$ 00,00"
            />
          </div>
          
          <Textarea 
            title="Descrição" 
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />
          <Actions>
            <Button title="Cancelar"/>
            <Button title="Adicionar prato"/>
          </Actions>
        </Form>
      </Box>
      <Footer/>
    </Container>
  );
}