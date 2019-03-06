import React from 'react'
import history from '../app/history'
import './My.less'

class My extends React.Component {
  render() {
    return (
      <div className="Content">
        <p>我的！！！</p>
        <button onClick={this.goHome}>返回</button>
      </div>
    )
  }
  goHome = () => {
    history.push('/')
  }
}
export default My
