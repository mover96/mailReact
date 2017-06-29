import * as React from 'react';

export interface LinkProps {
    active: boolean,
    children: Node,
    onClick: Function
}

export const Link: React.SFC<LinkProps> = (props) => {
    if (props.active) {
        return <span>{props.children}</span>
    }
    return (
        <a
            href="#"
            onClick={e => {
                e.preventDefault()
                props.onClick()
            }}
        >
            {props.children}
        </a>
    )
}