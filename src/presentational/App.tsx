import * as React from 'react';

import {Footer} from './Footer';
import AddTodo from '../containers/AddTodo';
import { VisibleTodoList } from '../containers/VisibleTodoList';

export const App: React.SFC<null> = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)