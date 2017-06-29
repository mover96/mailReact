import * as React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { addTodo } from '../actions/actions'

let AddTodo: React.SFC<any> = ({ dispatch }) => {
  let input: any

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default (connect()(AddTodo))



