import * as React from 'react'

import { EmailType } from '../interfaces/Email'

export interface DataProps {
    initData: (email: EmailType) => void
}

export class Data extends React.Component<DataProps, any> {

    componentWillMount() {
        const patientMailData = document.getElementById('config').getAttribute('data-patientmail');
        const clinicMailData = document.getElementById('config').getAttribute('data-clinicMail');

        //dispatch settting emails for both 
        const initData = this.props.initData;

        genEmails(JSON.parse(patientMailData)['value'], 'patient', initData);
        genEmails(JSON.parse(clinicMailData)['value'], 'clinic', initData);
    }

    render() {
        const DivStyle = {
            display: 'none'
        }
        return <div style={DivStyle}>
        </div>
    }
}

const parseEmailObj = (emailObj: any, tag2: string, idx: number): EmailType => {
    let email: EmailType = {
        tag: tag2,
        number: idx,
        sender: emailObj.sender.emailAddress.address,
        message: emailObj.body.content,
        subject: emailObj.subject,
        timeSent: emailObj.receivedDateTime
    };


    return email;
}

const genEmails = (resObj: any, tag: string, initData: (email: EmailType) => void): void => {
    let x = 0;
    resObj.forEach((e: any) => {
        if (e.sender.emailAddress.name != tag) {
            initData(parseEmailObj(e, tag, ++x));
        }
    });
}