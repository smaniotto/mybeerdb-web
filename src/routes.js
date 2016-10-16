import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import SearchPage from './search-page'


const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={SearchPage}></Route>
  </Router>
)


export default Routes
