'use strict';

var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;
var reducer = require('./reducer');

var initialState = 'John';

var foo = function(name) {
    return function(dispatch) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                dispatch({
                    type: 'SET_NAME',
                    name: name
                });
                resolve();
            }, 1000)
        });
    };
};

var store = createStore(reducer, initialState, applyMiddleware(thunk));
console.log('state should be John: ', store.getState() === 'John');

// dispatch an action
store.dispatch({
    type: 'SET_NAME',
    name: 'Marie Ann'
});
console.log('state should be Marie Ann: ', store.getState() === 'Marie Ann');

// Thunk middleware lets dispatch thunk async actions as if they were actions
store.dispatch(foo('Alice'))
    .then(function() {
        console.log('state should be Alice: ', store.getState() === 'Alice');
        console.log('done');
    });
