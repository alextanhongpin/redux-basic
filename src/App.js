import React from 'react'

import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import NoMatch from './atomic/atom/NoMatch'
import Todos from './atomic/page/Todos'

import AppHeader from './atomic/atom/AppHeader'
import AppLayout from './atomic/atom/AppLayout'
import AppFooter from './atomic/atom/AppFooter'

const HelloPage = () => (
  <div>Hello <Link to={'/world'}>World</Link></div>
)
const WorldPage = () => (
  <div><Link to={'/hello'}>Hello</Link> World</div>
)

const Root = () => (
  <Switch>
    <AppLayout
      header={<AppHeader />}
      footer={<AppFooter />}
    >
      <Route exact path='/' component={Todos.page} />
      <Route path='/hello' component={HelloPage} />
      <Route path='/world' component={WorldPage} />
    </AppLayout>
    <Route component={NoMatch} />

  </Switch>
)

export default Root
