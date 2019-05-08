import React from 'react'
import history from './app/history'
import { Router, Route, Switch } from 'react-router-dom'
import Index from './pages/Index'
import My from './pages/My';
import Array from './pages/Lodash/Array';
import Lodash from './pages/Lodash/Index';
import GridLayout from './pages/GridLayout/Index';
import Loft from './pages/Loft/Index';
import Moment from './pages/Moment/Index'
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
      <Route exact={true} path="/loft" component={Loft}/>
    </div>
  )
}
const moment = () => {
  return (
    <Route exact={true} path="/moment" component={Moment}/>
  )
}
const routers = () => {
  return (
    <Router history={history}>
      <div>
        {my()}
        {lodash()}
        {layout()}
        {moment()}
      </div>
    </Router>
  )
}

export default routers
