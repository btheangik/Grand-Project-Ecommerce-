import React from "react";
import Nav from "../Nav/Nav";
import "./Window.css";
import Form from "../Form/Form";
import Container from "../Container/Container";

function Window() {
  return (
    <div>
      <div>
        <Nav />
      </div>

      <Container>
        <Form />
      </Container>
    </div>
  );
}

export default Window;
