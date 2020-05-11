import React, { useState, useEffect } from "react";
import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Container from "@material-ui/core/Container";
import { v4 as uuid } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = () => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((todos) => {
        setTodos([...todos]);
      });
  };
  const addTodo = (todoItem) => {
    fetch("http://localhost:3000/todos", {
      method: "Post",
      headers: { "content-type": "Application/json" },
      body: JSON.stringify({
        id: uuid(),
        title: todoItem,
        completed: false,
      }),
    })
      .then((res) => res.json())
      .then((todo) => {
        console.log(todo);
        getAllTodos();
      });
    // setTodos([...todos, { id: uuid(), title: todoItem, completed: false }]);
  };

  const updateTodo = (key) => {
    fetch(`http://localhost:3000/todos/${key}`)
      .then((res) => res.json())
      .then((todo) => {
        fetch(`http://localhost:3000/todos/${key}`, {
          method: "Put",
          headers: { "content-type": "Application/json" },
          body: JSON.stringify({
            id: key,
            title: todo.title,
            completed: !todo.completed,
          }),
        })
          .then((res) => res.json())
          .then((todo) => {
            console.log(todo);
            getAllTodos();
          });
      });

    console.log("update");

    // const filteredTodos = todos.map((todo) => {
    //   return todo.id === key ? { ...todo, completed: !todo.completed } : todo;
    // });
    // setTodos(filteredTodos);
  };

  const deleteTodo = (key) => {
    fetch(`http://localhost:3000/todos/${key}`, {
      method: "Delete",
    }).then(getAllTodos());
    getAllTodos();
    // const filteredTodos = todos.filter((todo) => {
    //   return todo.id !== key;
    // });
    // setTodos(filteredTodos);
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
