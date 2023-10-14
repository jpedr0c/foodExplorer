import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Container, BoxInput } from "./styles";

export function Search({...rest }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    if (e.key === "Enter"){
      setSearch("");
      e.target.value = "";

      if (window.location.pathname !== "/")
        navigate("/");
    }
  }
  return(
    <Container {...rest}>
      <BoxInput>
        <MagnifyingGlass size={20}/>
        <input {...rest} onChange={(e) => setSearch(e.target.value)} onKeyUp={handleSearch}/>
      </BoxInput>
    </Container>
  );
}