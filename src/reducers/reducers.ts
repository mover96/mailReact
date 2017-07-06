import { combineReducers } from 'redux'
import { Reducer } from 'redux'

import {
  ADD_EMAIL
} from '../actions/actions'

//importing types
import { 
    AddEmail,
    OtherAction
} from '../actions/actions'

type AddEmailAction = 
    AddEmail |
    OtherAction

function emails(state: any = [], action: AddEmailAction) {
  logState(state);
  switch (action.type) {
    case ADD_EMAIL:
      return [
        ...state,
        {
          email: action.email
        }
      ]
    default:
      return state
  }
}

export const emailApp: Reducer<any> = combineReducers({
  emails,
})

function logState(state: any) {
  console.log('Current State:\n');
  console.log(state);
  console.log('----------------\n')
}