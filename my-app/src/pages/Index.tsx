import React from 'react'
import history from '../app/history'
class Index extends React.Component {
  render() {
    return (
      <div>
         <p>我是首页！！！llll</p>
        <button onClick={this.goMy}>我的</button>
      </div>
    )
  }
  goMy = () => {
    history.push('./my')
  }
}
export default Index
