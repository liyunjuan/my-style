import React from 'react';
import { HashRouter, Route, Switch, useHistory } from 'react-router-dom';
import Home from '../components/Home'
import Detail from '../components/Detail'

class BasicRoute extends React.PureComponent {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} history={useHistory} />
          <Route exact path='/detail' component={Detail} history={useHistory} />
          {/* <Route exact path='/detail/:id' component={Detail} history={useHistory} /> */}
        </Switch>
      </HashRouter>
    )
  }
};


export default BasicRoute;