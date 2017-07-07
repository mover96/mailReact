import * as React from 'react'

import { EmailType } from '../interfaces/Email'

export interface EmailProps {
    email: EmailType
}

export const Email: React.SFC<EmailProps> = (props) => {
    const messageCountStyle = {
        fontSize: '25px'
    }

    const timeStyle = {
        fontSize: '10px'
    }

    const senderStyle = {
        fontSize: '18px'
    }

    const subjectStyle = {
        fontSize: '18px'
    }
    return (
        <div>
            <div style={messageCountStyle}>Message {props.email.number}</div>
            <div style={senderStyle}>Sender: {props.email.sender}</div>
            <p style={timeStyle}>Time Sent: {props.email.timeSent}</p>
            <p style={senderStyle}>Subject: {props.email.subject}</p>
            <br />
            <span dangerouslySetInnerHTML={{__html: props.email.message}}></span>
            <br />
            <hr />
        </div>
    )
}