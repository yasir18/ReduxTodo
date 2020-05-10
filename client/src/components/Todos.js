import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Todo from "./Todo";

function Todos(props) {
  console.log("Todos component");
  console.log(props.todos);
  const todoItems = props.todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      completed={todo.completed}
      deleteTodo={props.deleteTodo}
      updateTodo={props.updateTodo}
    />
  ));
  return (
    <div>
      <List>{todoItems}</List>
    </div>
  );
}

export default Todos;
