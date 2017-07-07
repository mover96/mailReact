import { connect } from 'react-redux'

import { EmailList } from '../components/EmailList'
//import {  } from '../actions/actions'
import { EmailType } from '../interfaces/Email'

export interface MstpOwnProps {
  tag: string
}

const getTaggedEmails = (emails: any[], tag: string) => {
  var a = emails.filter(e => {
    return e.tag === tag
  });
  return a;
//   var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

//   var longWords = words.filter(function(word){
//   return word.length > 6;
// })
// return longWords;
}

const mapStateToProps = (state: any, ownProps: MstpOwnProps): any => {
  return {
    emails: getTaggedEmails(state.emails, ownProps.tag)
  }
}

// export interface MapDispatchToPropsReturn {
//   initData: (emailObj: JSON, key: string) => void
// }

// const mapDispatchToProps = (dispatch: any): MapDispatchToPropsReturn => {
//   return {
    
//   }
// }

export const VisibleEmail = connect(mapStateToProps, null)(EmailList)