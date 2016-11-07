import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import './index.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { bindActionCreators } from 'redux'
import store from './configureStore'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import * as routeActions from "./actions/routeActions"

const boundRouteActions = bindActionCreators(routeActions, store.dispatch)
const history = syncHistoryWithStore(browserHistory, store)

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
       <Route path="/" component={App} onEnter={boundRouteActions.fetchAllMentors}/>
     </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
