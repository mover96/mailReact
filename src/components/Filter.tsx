import * as React from 'react'

export interface FilterProps {
    updateFilter: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export const Filter: React.SFC<FilterProps> = (props) => {
    return <div>
        <input 
            type="text" placeholder="Filter..."
            onChange={e => props.updateFilter(e)} />
    </div>
}