import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import Dropzone from "../../components/Dropzone";
import { Container, Fields, FieldsGroup, List, ListItem } from "./styles";

function CreatePoint() {
  return (
    <Container>
      <header>
        <Logo />

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form action="">
        <h1>
          Cadastro do <br /> ponto de coleta
        </h1>
        <Dropzone />

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <Fields>
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" id="name" />
          </Fields>

          <FieldsGroup>
            <Fields>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" />
            </Fields>

            <Fields>
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="text" name="whatsapp" id="whatsapp" />
            </Fields>
          </FieldsGroup>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <FieldsGroup>
            <Fields>
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione um UF</option>
              </select>
            </Fields>

            <Fields>
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma cidade</option>
              </select>
            </Fields>
          </FieldsGroup>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
            <span>Selecione um ou mais ítens abaixo</span>
          </legend>

          <List>
            <ListItem>Item</ListItem>
          </List>
        </fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </Container>
  );
}

export default CreatePoint;
