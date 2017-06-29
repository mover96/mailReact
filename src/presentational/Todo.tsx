import * as React from 'react';

export interface TodoProps {
    onClick: Function,
    completed: boolean,
    text: string
}

export const Todo: React.SFC<TodoProps> = (props) => {
    return (
        <li 
            onClick={e => props.onClick(e)}
            style={{
                textDecoration: props.completed ? 'line-through' : 'none'
            }}
        >
            {props.text}
        </li>
    )
}