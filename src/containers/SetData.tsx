import * as React from 'react'

import { connect } from 'react-redux'

import { toggleTodo } from '../actions/actions'

class SetData extends React.Component<null, any> {
  constructor() {
    super();
  }

  componentWillMount() {
    //dispatch settting emails for both 
  }

  render() {

  }
}

const mapStateToProps = (state: any) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    
    }
  }
}

export const SetData = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)