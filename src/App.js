import React from 'react'

import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import NoMatch from './atomic/atom/NoMatch'
import Todos from './atomic/page/todos'

const HelloPage = () => (
  <div>Hello <Link to={'/world'}>World</Link></div>
)
const WorldPage = () => (
  <div><Link to={'/hello'}>Hello</Link> World</div>
)

const Root = () => (
  <Switch>
    <Route exact path='/' component={Todos.page} />
    <Route path='/hello' component={HelloPage} />
    <Route path='/world' component={WorldPage} />
    <Route component={NoMatch} />
  </Switch>
)

export default Root
