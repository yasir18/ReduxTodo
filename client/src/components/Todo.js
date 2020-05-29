import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { ListItem, Checkbox } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { updateTodoAction, deleteTodoAction } from "../actions/todoActions";

export default function Todo(props) {
  const dispatch = useDispatch();
  console.log(`todo COmponent ${props.id}`);
  const setStyle = () => {
    return props.completed
      ? { textDecoration: "line-through" }
      : { textDecoration: "none" };
  };

  const updateTodo = () => {
    dispatch(updateTodoAction(props.id, props.title, !props.completed));
  };

  const deleteTodo = () => {
    dispatch(deleteTodoAction(props.id));
  };
  return (
    <ListItem style={setStyle()}>
      {props.title}
      <Checkbox checked={props.completed} onChange={updateTodo} />
      <IconButton aria-label="delete" onClick={deleteTodo}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}
