import { connect } from 'react-redux'

import { setVisibilityFilter } from '../actions/actions'
import { Link } from '../presentational/Link'

export interface StateProps {
    visibilityFilter: string
}

export interface FilterLinkProps {
    filter: string
}

const mapStateToProps = (state: StateProps, ownProps: FilterLinkProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

export const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)