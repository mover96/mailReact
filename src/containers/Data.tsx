import * as React from 'react'

import { EmailType } from '../interfaces/Email'

export interface DataProps {
  initData: (email: EmailType) => void
}

export class Data extends React.Component<DataProps, any> {

  componentWillMount() {
      console.log('will mount')
    const patientMailData = document.getElementById('config').getAttribute('data-patientmail');
    const clinicMailData = document.getElementById('config').getAttribute('data-clinicMail');

    //dispatch settting emails for both 
    const initData = this.props.initData;
    

    const genEmails = (resObj: any, tag: string): void => {

        const parseEmailObj = (emailObj: any, tag2: string, idx: number): EmailType => {
            let email: EmailType = {
                tag : tag2,
            number : idx,
            sender : emailObj.sender.emailAddress.address,
            message : emailObj.body.content,
            subject : emailObj.subject,
            timeSent : emailObj.receivedDateTime
            };
            

            return email;
        }
      const initData = this.props.initData;
      let x = 1;
      console.log(resObj);
      resObj.forEach((e: any) => {
        if(e.sender.emailAddress.name != tag) {
            initData(parseEmailObj(e, tag, ++x));
        }
    });
    }

    genEmails(JSON.parse(patientMailData)['value'], 'patient');
    genEmails(JSON.parse(clinicMailData)['value'], 'clinic');
  }

  

  render() {
      return<div>

      </div>
  }

  

//   render() {
//     const FifStyle = {
//         width: '50%',
//         height: '100%',
//         display: 'inline-block'
//     }
//     return <div>
//     <div style={FifStyle}>test</div>
//     </div>
//   }
}