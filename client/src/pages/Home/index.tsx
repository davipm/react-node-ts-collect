import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Container, Content } from "./styles";

function Home() {
  return (
    <Container>
      <Content>
        <header>
          <Logo />
        </header>

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </Content>
    </Container>
  );
}

export default Home;
