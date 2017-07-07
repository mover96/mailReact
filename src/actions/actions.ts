export type OtherAction = { type: '' };
export const OtherAction: OtherAction = { type: '' };

import { EmailType } from '../interfaces/Email'

/*
 * action types
 */

export type ADD_EMAIL = 'ADD_EMAIL'; //type of string that must be equal to 'ADD_EMAIL'
export const ADD_EMAIL: ADD_EMAIL = 'ADD_EMAIL';

export type FILTER = 'FILTER';
export const FILTER: FILTER = 'FILTER';

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

export type Filter = {
    type: FILTER,
    filter: string,
    tag: string
}

export function filter(filter: string, tag: string): Filter {
  return { type: FILTER, filter: filter, tag: tag}
}
