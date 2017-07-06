import * as React from 'react';

import { SetData } from '../containers/SetData';
import  {MailList } from './MailList'

export const App: React.SFC<null> = () => {
    // var a = document.getElementById('config');
    // var b = a.getAttribute('data-patientmail');
    // console.log(JSON.parse(b));
    return (
        <div>
            <SetData />
            <MailList tag={'patient'}/>
            <MailList tag={'clinic'}/>
        </div>
    )
}