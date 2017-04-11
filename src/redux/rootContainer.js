
import { connect } from 'react-redux'
import rootReducer from './rootReducer'

function mapStateToProps (state) {
  return {
    test: state.contacts
   }
}

export default connect(
  mapStateToProps
)(rootReducer)
