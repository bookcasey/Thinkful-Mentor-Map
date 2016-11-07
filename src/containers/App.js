import { connect } from 'react-redux'
import AppView from './../components/AppView'

export default connect(
  state => ({
    loading: state.mentor.isFetching
  }),
  {  }
)(AppView)
