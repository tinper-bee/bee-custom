import React, { Component } from 'react'
import { render } from 'react-dom'
import 'babel-polyfill'
import ES6Promise from 'es6-promise';

ES6Promise.polyfill();

import routes from './routes'

import './assets/css/index.css'

render( routes, document.getElementById('app') )


