import * as React from 'react';

import {TodoInterface} from '../interfaces/Todo'; 

import {Todo} from './Todo';

export interface TodoListProps {
    todos: TodoInterface[],
    onTodoClick: (id: any) => void;
}

export const TodoList: React.SFC<TodoListProps> = (props) => {
    return (
        <ul>
            {props.todos.map(todo => (
                <Todo key={todo.id} {...todo} onClick={() => props.onTodoClick(todo.id)} />
            ))}
        </ul>
    )
}