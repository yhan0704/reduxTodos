import { createStore } from "redux";

const ADD_TODOS = "todos/ADD_TODOS";
const TOGGLE = "todos/TOGGLE";

let index = 1;
export const addTodos = (text) => ({
  type: ADD_TODOS,
  todo: {
    id: index++,
    text,
  },
});
export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

const initial = [];

function todos(state = initial, action) {
  switch (action.type) {
    case ADD_TODOS:
      return state.concat(action.todo);
    case TOGGLE:
        return state.map(todo => {
            if(todo.id === action.id){
                return ({...todo, done : !todo.done})
            }else{
                return todo
            }
        })
    default:
      return state;
  }
}

const store = createStore(todos, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
