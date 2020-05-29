import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../actions/todoActions";

export default function NewTodo() {
  const [todoItem, setTodoItem] = useState("");
  const dispatch = useDispatch();
  const submitData = (event) => {
    event.preventDefault();
    if (todoItem !== "") {
      dispatch(addTodoAction(todoItem));
    }
    setTodoItem("");
  };
  console.log("new todo render");
  return (
    <>
      <form onSubmit={submitData}>
        <TextField
          id="outlined-basic"
          label="Add Todo"
          size="small"
          variant="outlined"
          value={todoItem}
          onChange={(event) => setTodoItem(event.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          style={{ marginLeft: "5px" }}
          color="secondary"
        >
          Submit
        </Button>
      </form>
    </>
  );
}
