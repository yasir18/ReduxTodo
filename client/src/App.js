import React, { useState, useEffect } from "react";
import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Container from "@material-ui/core/Container";
import { v4 as uuid } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoItem) => {
    setTodos([...todos, { id: uuid(), title: todoItem, completed: false }]);
  };

  const updateTodo = (key) => {
    console.log("update");
    const filteredTodos = todos.map((todo) => {
      return todo.id === key ? { ...todo, completed: !todo.completed } : todo;
    });
    setTodos(filteredTodos);
  };

  const deleteTodo = (key) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== key;
    });
    setTodos(filteredTodos);
  };
  console.log("App render");

  return (
    <Container maxWidth="md" style={{ margin: "auto", width: "50%" }}>
      <h3> Todo list App</h3>
      <NewTodo addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </Container>
  );
}

export default App;
