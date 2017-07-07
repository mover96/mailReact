import { connect } from 'react-redux'

import { EmailList } from '../components/EmailList'
import { EmailType } from '../interfaces/Email'

import { FilterObj } from '../reducers/reducers'

export interface MstpOwnProps {
  tag: string
}

const getTaggedEmails = (emails: any[], tag: string) => {
  var a = emails.filter(e => {
    return e.tag === tag
  });
  return a;
}

const getFilter = (filters: FilterObj[], tag: string) => {
  for (var i = 0; i < filters.length; i++) {
    if (filters[i].tag === tag) {
      return filters[i].filter;
    }
  }
  return '';
}

const mapStateToProps = (state: any, ownProps: MstpOwnProps): any => {
  return {
    emails: getTaggedEmails(state.emails, ownProps.tag),
    filter: getFilter(state.filters, ownProps.tag)
  }
}

export const VisibleEmail = connect(mapStateToProps, null)(EmailList)