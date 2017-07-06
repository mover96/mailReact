import * as React from 'react'

import { VisibleEmail } from '../containers/VisibleEmail'

export interface MailList {
    tag: string
}

export const MailList: React.SFC<MailList> = (props) => {
    return <div>
        {/*formwarpper*/}
        <VisibleEmail tag={props.tag}/>
    </div>
}