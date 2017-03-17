import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../containers/Main';
import Home from '../components/Home';
import Color from '../components/Color';
import CustomComponent from '../containers/Component';
import CustomButton from '../components/Button';
import ZIndex from '../components/ZIndex';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="/color" component={Color} />
      <Route path="/time" component={Color} />
       <Route path="/zIndex" component={ZIndex} />
      <Route path="/components/button" component={CustomButton} />
    </Route>
  </Router>
)
