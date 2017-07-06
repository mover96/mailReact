import * as React from 'react'

import { Email } from './Email'
import { EmailType } from '../interfaces/Email'

export interface EmailListProps {
    emails: any[] //cheated here
}

export const EmailList: React.SFC<EmailListProps> = (props) => {
    return <ul>
        {props.emails.map(email => {
            return <Email email={email}/>
        })}
        {console.log('ffuu' + props.emails[0].email.tag)}
    </ul>
}