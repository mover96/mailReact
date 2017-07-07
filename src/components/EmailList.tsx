import * as React from 'react'

import { Email } from './Email'
import { EmailType } from '../interfaces/Email'

export interface EmailListProps {
    emails: EmailType[],
    filter: string
}

export const search = (email: EmailType, filter: string): boolean => {
    if(email.message.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;
    }
    if(email.subject.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;
    }
}

export const EmailList: React.SFC<EmailListProps> = (props) => {
    return <ul>
        {props.emails.map(email => {
            if(search(email, props.filter)) {
                return <li key={email.number + email.sender}> <Email email={email}/> </li>
            }
        })}
    </ul>
}