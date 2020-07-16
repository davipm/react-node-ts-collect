import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import Dropzone from "../../components/Dropzone";
import { Container, Fields, FieldsGroup, List, ListItem } from "./styles";

function CreatePoint() {
  const [selectedFile, setSelectedFile] = useState<File>();

  return (
    <Container>
      <header>
        <Link to="/">
          <Logo />
        </Link>

        <Link to="/">
          <FiArrowLeft />
          Back to home
        </Link>
      </header>

      <form>
        <h1>
          Registration of <br /> collection point
        </h1>

        <Dropzone onFileUpload={setSelectedFile} />

        <fieldset>
          <legend>
            <h2>Contact Information</h2>
          </legend>

          <Fields>
            <label htmlFor="name">Entity name</label>
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
            <h2>Address</h2>
            <span>Select the address on the map</span>
          </legend>

          <FieldsGroup>
            <Fields>
              <label htmlFor="uf">State (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Select a UF</option>
              </select>
            </Fields>

            <Fields>
              <label htmlFor="city">City</label>
              <select name="city" id="city">
                <option value="0">Select a city</option>
              </select>
            </Fields>
          </FieldsGroup>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Collection items</h2>
            <span>Select one or more items below</span>
          </legend>

          <List>
            <ListItem>Item</ListItem>
            <ListItem selected>Item</ListItem>
            <ListItem>Item</ListItem>
          </List>
        </fieldset>

        <button type="submit">Register collection point</button>
      </form>
    </Container>
  );
}

export default CreatePoint;
