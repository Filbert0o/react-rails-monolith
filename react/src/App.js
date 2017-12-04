import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Layout from "./components/Layout"
import CerealsIndexContainer from "./containers/CerealsIndexContainer"
import CerealShowContainer from "./containers/CerealShowContainer"

const App = props =>{
  return(
    <div>
      <h1>Basic Facts about cereal</h1>
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <Route path='/cereals' component={CerealsIndexContainer}/>
          <Route path='/cereals/:id' component={CerealShowContainer}/>
        </Route>
      </Router>
    </div>
  )
}

export default App;
