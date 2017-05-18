import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import store from '../store/index';
import Main from '../containers/Main';
import Home from '../components/Home';
import Color from '../components/Color';
import CustomComponent from '../containers/Component';
import CustomButton from '../components/Button';
import ZIndex from '../components/ZIndex';

export default (
<Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/components/Button" component={CustomButton} />
            <Route path="/base/Color" component={Color} />
        </Route>
    </Router>
</Provider>

)
