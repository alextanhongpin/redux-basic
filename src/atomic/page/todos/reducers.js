
import { combineReducers } from 'redux'
import {
    VisibilityFilters,
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER
 } from './actions'

// const initialState = {
//   visibilityFilters: VisibilityFilters.SHOW_ALL,
//   todos: []
// }

function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      console.log(action)
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (action.id === todo.id) {
          return {
            ...todo,
            ...{
              completed: !todo.completed
            }
          }
        }
        return todo
      })

    default:
      return state
  }
}

function visibilityFilter (state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
// function todoApp (state = initialState, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
