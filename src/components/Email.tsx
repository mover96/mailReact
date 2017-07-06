import * as React from 'react'

import { EmailType } from '../interfaces/Email'

export interface EmailProps {
    email: EmailType
}

export const Email: React.SFC<any> = (props) => { //cheated here
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
    console.log('LMAO' + props);
    return (
        <div>
            {console.log('HEREERERERE' + props)}
            <div style={messageCountStyle}>Message {props.email.email.number}</div>
            <div style={senderStyle}>Sender: {props.email.email.sender}</div>
            <p style={timeStyle}>Time Sent: {props.email.email.timeSent}</p>
            <p style={senderStyle}>Subject: {props.email.email.subject}</p>
            <br />
            {props.email.email.message}
            <br />
        </div>
    )
}