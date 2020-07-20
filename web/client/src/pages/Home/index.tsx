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
          <h1>Your waste collection marketplace.</h1>
          <p>We help people find collection points efficiently.</p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Register a collection point</strong>
          </Link>
        </main>
      </Content>
    </Container>
  );
}

export default Home;
