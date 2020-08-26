import React from "react";
import ReactDOM from "react-dom";
import { Container } from "shards-react";
import Chat from "chat/Chat";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./index.css";

const App = () => (
  <Container>
    <h1 className="mt-4">Chato!</h1>
    <Chat />
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
