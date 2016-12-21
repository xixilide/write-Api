import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import ShowPost from './components/ShowPost';
import New from './components/New'

const renderRoutes = () => (

  <Router history={browserHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={ Home } />
        <Route path='/posts/:post_id' component={ShowPost} />
        <Route path='/new' component={New} />
    </Route>
  </Router>
);

export default renderRoutes;
