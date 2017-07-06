import { connect } from 'react-redux'

import { Data } from './Data'
import { addEmail } from '../actions/actions'
import { EmailType } from '../interfaces/Email'

export interface MapDispatchToPropsReturn {
  initData: (email: EmailType) => void
}

const mapDispatchToProps = (dispatch: any): MapDispatchToPropsReturn => {
  return {
    initData: (email) => {
      console.log('dispatching... ' + email);
      dispatch(addEmail(email));
    }
  }
}

export const SetData = connect(null, mapDispatchToProps)(Data)