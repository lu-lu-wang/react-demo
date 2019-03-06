import React from 'react'
import history from './app/history'
import { Router, Route, Switch } from 'react-router-dom'
import Index from './pages/Index'
import My from './pages/My';
const my = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Index} />
      <Route exact={true} path="/my" component={My} />
    </Switch>
  )
}
const routers = () => {
  return <Router history={history}>{my()}</Router>
}

export default routers
