import { ADD_TODO, DELETE_TODO, UPDATE_TODO, GET_TODOS } from "../actions";

const InitialState = {
  todos: [],
};

const todoReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.payload };
    case ADD_TODO:
      console.log("reached reducer");
      console.log(action.payload);
      return { ...state, todos: [...state.todos, action.payload] };
    case UPDATE_TODO:
      //can use update of react-addons-update
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: action.payload.completed }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
