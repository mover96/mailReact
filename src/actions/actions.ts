export type OtherAction = { type: '' };
export const OtherAction: OtherAction = { type: '' };

/*
 * action types
 */

export type ADD_TODO = 'ADD_TODO'; //type of string that must be equal to 'ADD_TODO'
export const ADD_TODO: ADD_TODO = 'ADD_TODO';

export type TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_TODO: TOGGLE_TODO = 'TOGGLE_TODO';

export type SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SET_VISIBILITY_FILTER: SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

export type VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const VisibilityFilters: VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */
export type AddTodo = {
    type: ADD_TODO,
    id: number
    text: string
}

let nextTodoId = 0;

export function addTodo(text: string): AddTodo {
  return { type: ADD_TODO, id: nextTodoId++, text }
}

export type ToggleTodo = {
    type: TOGGLE_TODO,
    id: number
}

export function toggleTodo(id: number): ToggleTodo {
  return { type: TOGGLE_TODO, id }
}

export type SetVisibilityFilter = {
    type: SET_VISIBILITY_FILTER,
    filter: string
}

export function setVisibilityFilter(filter: string): SetVisibilityFilter {
  return { type: SET_VISIBILITY_FILTER, filter }
}