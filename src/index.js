
import registerServiceWorker from './registerServiceWorker'

import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import Todos from './atomic/page/todos'

import './index.scss'

let store = createStore(Todos.reducer)

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
