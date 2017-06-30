import { combineReducers } from 'redux'
import { Reducer } from 'redux'

import { TodoInterface } from '../interfaces/Todo'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions/actions'

import { 
    AddTodo,
    ToggleTodo,
    SetVisibilityFilter,
    OtherAction
} from '../actions/actions'

type TodoAction = 
    AddTodo |
    ToggleTodo |
    OtherAction

type VisibilityFilterAction = 
    SetVisibilityFilter |
    OtherAction

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action: VisibilityFilterAction) {
  logState(state);
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state: any = [], action: TodoAction) {
  //logState(state);
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: action.id
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo: TodoInterface) =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo 
      )
    default:
      return state
  }
}

export const todoApp: Reducer<any> = combineReducers({
  visibilityFilter,
  todos
})

function logState(state: any) {
  console.log('Current State:\n');
  console.log(state);
  console.log('----------------\n')
}