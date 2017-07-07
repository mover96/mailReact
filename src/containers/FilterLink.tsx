import * as React from 'react'
import { connect } from 'react-redux'

import { Filter } from '../components/Filter'
import { filter } from '../actions/actions'

export interface MdtpOwnProps {
    tag: string
}

export interface MapDispatchToPropsReturn {
  updateFilter: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const mapDispatchToProps = (dispatch: any, ownProps: MdtpOwnProps): MapDispatchToPropsReturn => {
    return {
        updateFilter: (e) => {
            var filterString = e.target.value;
            dispatch(filter(filterString, ownProps.tag));
        }
    }
}

export const FilterLink = connect(null, mapDispatchToProps)(Filter)