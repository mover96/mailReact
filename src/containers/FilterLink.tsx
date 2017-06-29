import { connect } from 'react-redux'

import { setVisibilityFilter } from '../actions/actions'
import { Link } from '../presentational/Link'

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        active: ownProps.filter === state.setVisibilityFilter
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