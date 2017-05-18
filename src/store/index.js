import { createStore, applyMiddleware, compose } from 'redux';
import { setValue } from '../reducers/index';
import middleware from '../middlewares'

const initialState = {
    baseStyle: {}
}

let store = createStore(
    setValue,
    initialState,
    compose(
        applyMiddleware( ...middleware )
    )
);

export default store;

