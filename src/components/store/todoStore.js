const redux = require("redux");
const createStore = redux.createStore;
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
//ACTION

export const addTodoAction = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodoAction = (payload) => {
  console.log(payload);
  return {
    type: DELETE_TODO,
    payload,
  };
};

//intial state

const intialState = {
  todos: [],
};

//reducer

const addTodoReducer = (state = intialState, action) => {
  const index = state.todos.indexOf(action.payload);
  console.log(index, state.todos);
  switch (action.type) {
    case ADD_TODO:
      return { ...state.todos, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

//store

export const store = createStore(addTodoReducer);
