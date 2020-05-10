import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function NewTodo(props) {
  const [todoItem, setTodoItem] = useState("");

  const submitData = (event) => {
    event.preventDefault();
    if (todoItem !== "") props.addTodo(todoItem);
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
