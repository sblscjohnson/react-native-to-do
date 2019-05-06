import React from 'react'
import { Switch, Route } from 'react-router-native'

import Home from './Components/Home/Home'
import Todo from './Components/Todo/Todo'

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/Todo' component={Todo} />
  </Switch>
)