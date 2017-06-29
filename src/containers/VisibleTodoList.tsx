import { connect } from 'react-redux'

import { toggleTodo } from '../actions/actions'
import { TodoList } from '../presentational/TodoList'
import { TodoInterface } from '../interfaces/Todo'

const getVisibleTodos = (todos: TodoInterface[], filter: string) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state: any) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

export interface MapDispatchToProps {
  onTodoClick: (id: any) => void
}

const mapDispatchToProps = (dispatch: any):MapDispatchToProps => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)