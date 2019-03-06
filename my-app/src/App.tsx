import React, { Component } from 'react'
import { Provider } from 'react-redux'
import routers from './Router';
import  store from './Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {routers()}
      </Provider>
    )
  }
}

export default App
