import React from 'react'
import history from './app/history'
import { Router, Route, Switch } from 'react-router-dom'
import Index from './pages/Index'
import My from './pages/My';
import Array from './pages/Lodash/Array';
import Lodash from './pages/Lodash/Index';
import GridLayout from './pages/GridLayout/Index';
const my = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Index} />
      <Route exact={true} path="/my" component={My} />
      <Route exact={true} path="/lodash" component={Lodash}/>
    </Switch>
  )
}
const lodash = () => {
  return (
    <div>
      <Route exact={true} path="/array" component={Array} />
    </div>
  )
}
const layout = () => {
  return (
    <div>
      <Route exact={true} path="/gridLayout" component={GridLayout}/>
    </div>
  )
}
const routers = () => {
  return <Router history={history}><div>{my()}{lodash()}{layout()}</div></Router>
}

export default routers
