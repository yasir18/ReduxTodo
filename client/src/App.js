import React, { useState, useEffect } from "react";
import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Container from "@material-ui/core/Container";

function App() {
  console.log("App render");
  return (
    <Container maxWidth="md" style={{ margin: "auto", width: "50%" }}>
      <h3> Todo list App</h3>
      <NewTodo />
      <Todos />
    </Container>
  );
}

export default App;
