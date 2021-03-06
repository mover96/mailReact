import * as React from 'react';

import { SetData } from '../containers/SetData';
import  { MailList } from './MailList'

export const App: React.SFC<null> = () => {
    // var a = document.getElementById('config');
    // var b = a.getAttribute('data-patientmail');
    // console.log(JSON.parse(b));
    const FifStyle = {
        width: '50%',
        height: '100%',
        display: 'inline-block'
    }
    return (
        <div>
            <SetData />
            <div style={FifStyle}>
                <h2>Patient Mail</h2>
                <MailList tag={'patient'}/>
            </div>
            <div style={FifStyle}>
                <h2>Clinic Mail</h2>
                <MailList tag={'clinic'}/>
            </div>
        </div>
    )
}