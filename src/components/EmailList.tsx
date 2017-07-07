import * as React from 'react'

import { Email } from './Email'
import { EmailType } from '../interfaces/Email'

export interface EmailListProps {
    emails: EmailType[]
}

export const EmailList: React.SFC<EmailListProps> = (props) => {
    return <ul>
        {props.emails.map(email => {
            return <li key={email.number + email.sender}> <Email email={email}/> </li>
        })}
    </ul>
}