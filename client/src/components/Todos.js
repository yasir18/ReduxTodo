import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Todo from "./Todo";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getTodosAction } from "../actions/todoActions";

function Todos() {
  //dispatch(getTodosAction());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosAction());
  }, []);
  const todos = useSelector((state) => state.todos.todos);

  console.log(todos);
  console.log("Todos component");
  const todoItems = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      completed={todo.completed}
    />
  ));
  return (
    <div>
      <List>{todoItems}</List>
    </div>
  );
}

export default Todos;
