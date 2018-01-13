import { compose } from 'redux'
import { connect } from 'react-redux'
import forRoute from 'hoc-little-router'

import proposalsData from 'redux/data/proposals'
import loader from 'components/loader'
import Proposals from './proposals'

const mapState = state => ({
  loaded: proposalsData.isInitialized(state),
  proposals: proposalsData.getAsArray(state),
})

const mapDispatch = dispatch => ({
  load: () => dispatch({ type: 'LOAD_EVENT_PROPOSALS_PAGE' }),
})

export default compose(
  forRoute('PROPOSALS', { absolute: true }), //
  connect(mapState, mapDispatch), //
  loader, //
)(Proposals)