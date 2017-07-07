import * as React from 'react'

import { VisibleEmail } from '../containers/VisibleEmail'
import { FilterLink } from '../containers/FilterLink'

export interface MailList {
    tag: string
}

export const MailList: React.SFC<MailList> = (props) => {
    return <div>
        <FilterLink tag={props.tag}/>
        <VisibleEmail tag={props.tag}/>
    </div>
}