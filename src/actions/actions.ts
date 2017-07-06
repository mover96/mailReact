export type OtherAction = { type: '' };
export const OtherAction: OtherAction = { type: '' };

import { EmailType } from '../interfaces/Email'

/*
 * action types
 */

export type ADD_EMAIL = 'ADD_EMAIL'; //type of string that must be equal to 'ADD_EMAIL'
export const ADD_EMAIL: ADD_EMAIL = 'ADD_EMAIL';

/*
 * action creators
 */
export type AddEmail = {
    type: ADD_EMAIL,
    email: EmailType
}

export function addEmail(email: EmailType): AddEmail {
  return { type: ADD_EMAIL, email: email }
}
