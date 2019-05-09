import React from 'react'
import { Switch, Route } from 'react-router-native'

import Home from './screens/Home/Home'
import Todo from './screens/Todo/Todo'

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/Todo' component={Todo} />
  </Switch>
)