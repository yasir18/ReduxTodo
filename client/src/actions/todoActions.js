import { ADD_TODO, DELETE_TODO, UPDATE_TODO, GET_TODOS } from "./index";
import { v4 as uuid } from "uuid";

export const getTodosAction = () => (dispatch) => {
  console.log("inside gettodosaction");
  fetch("http://localhost:3005/todos")
    .then((res) => res.json())
    .then((todos) => dispatch({ type: GET_TODOS, payload: todos }));
};

export const addTodoAction = (todoItem) => (dispatch) => {
  console.log("inisde action creater");
  fetch("http://localhost:3005/todos", {
    method: "POST",
    headers: { "content-type": "Application/json" },
    body: JSON.stringify({
      id: uuid(),
      title: todoItem,
      completed: false,
    }),
  })
    .then((res) => res.json())
    .then((todo) => dispatch({ type: ADD_TODO, payload: todo }))
    .catch((e) => console.log(e));
};

export const updateTodoAction = (todoId, title, completed) => (dispatch) => {
  fetch(`http://localhost:3005/todos/${todoId}`, {
    method: "Put",
    headers: { "content-type": "Application/json" },
    body: JSON.stringify({
      id: todoId,
      title: title,
      completed: completed,
    }),
  })
    .then((res) => res.json())
    .then((todo) => {
      dispatch({ type: UPDATE_TODO, payload: todo });
    });
};

export const deleteTodoAction = (todoId) => (dispatch) => {
  fetch(`http://localhost:3005/todos/${todoId}`, {
    method: "Delete",
  }).then(dispatch({ type: DELETE_TODO, payload: todoId }));
};
