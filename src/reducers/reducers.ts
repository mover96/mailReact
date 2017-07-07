import { combineReducers } from 'redux'
import { Reducer } from 'redux'

import {
  ADD_EMAIL,
  FILTER
} from '../actions/actions'

//importing types
import {
  AddEmail,
  Filter,
  OtherAction
} from '../actions/actions'

type AddEmailAction =
  AddEmail |
  OtherAction

export type FilterAction =
  Filter |
  OtherAction

function emails(state: any = [], action: AddEmailAction) {
  //logState(state);
  switch (action.type) {
    case ADD_EMAIL:
      return [
        ...state,

        action.email

      ]
    default:
      return state
  }
}

export type FilterObj = {
  filter: string,
  tag: string
}

export function filters(state: FilterObj[] = [], action: FilterAction) {
  //logState(state);
  switch (action.type) {
    case FILTER:
      for (var i = 0; i < state.length; i++) {
        if (action.tag === state[i].tag) {
          let newState: FilterObj[];
          newState = state.slice(0, i);
          newState.push({ filter: action.filter, tag: action.tag });
          newState.concat(state.slice(i));
          return newState;
        }
      }
      return [
        ...state,
        { filter: action.filter, tag: action.tag }
      ]
    default:
      return state
  }
}

export const emailApp: Reducer<any> = combineReducers({
  emails,
  filters
})

function logState(state: any) {
  console.log('Current State:\n');
  console.log(state);
  console.log('----------------\n')
}