# Thunk
redux studies thunk

***using Thunk Middleware for Async Actions.***

## Clone the repo & install
```
git clone https://github.com/suxxuscomp/thunk-middleware.git
cd ./thunk-middleware
npm install
```
## Usage
cd ./src/scripts

**node index.js**

## Tips
* a thunk is a function that returns a function.
* return a function that accepts `dispatch` so we can dispatch later.
* thunk middleware knows how to turn thunk async actions into actions.

## Links
[thunk](http://redux.js.org/docs/api/applyMiddleware.html)
[redux-thunk](https://github.com/gaearon/redux-thunk)
