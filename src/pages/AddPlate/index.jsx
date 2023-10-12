import { useState } from "react";
import { Container, Box, Form, Actions } from "./styles";
import { MenuMobal } from "../../components/MenuMobal";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { InputFile } from "../../components/InputFile";
import { Select } from "../../components/Select";
import { PlateItem } from "../../components/PlateItem";
import { Ingredients } from "../../components/Ingredients";

export function AddPlate() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [category, setCategory] = useState("");

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
              <PlateItem
                key="1" 
                value="Pão Naan"
                onClick={() => console.log("Removendo ingrediente")}
                // style={{ width: `${Ingredient.length / 1.15}rem`}}
              />
              <PlateItem 
                placeholder="Adicionar" 
                isNew
                onClick={() => console.log("Adicionando ingrediente")}
                // style={{ width: `${Ingredient.length / 1.15}rem`}}
              />
            </Ingredients>
            <Input
              placeholder="R$ 00,00"
              type="text"
              name="price"
              title="Preço"
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