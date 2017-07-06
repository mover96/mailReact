import * as React from "react";
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { emailApp } from './reducers/reducers'
import { App } from './components/App'

let store = createStore(emailApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)