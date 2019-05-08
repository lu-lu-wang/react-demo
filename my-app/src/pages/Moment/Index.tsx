import React from 'react'
import moment from 'moment'
import history from '../../app/history'
import './Index.less'
export default class Index extends React.Component {
  render () {
    // 时间戳是秒
    // 转当前时间需先转成毫秒数再format，moment()获取的是毫秒数可直接转
    // 转时间戳需用unix
    const timestamp = 1557208838
    // console.log(moment(timestamp*1000).format('YYYY:MM:DD'))
    return (
      <div className="content">
        Moment
        <p className="dateCat">当前时间：{moment().format('YYYY:MM:DD')}</p>
        <p className="dateCat">时间戳转正常时间：{moment(timestamp*1000).format('YYYY:MM:DD')}</p>
        <p className="dateCat">当前时间转时间戳：{moment().unix()}</p>
        <button onClick={this.goBack}>返回</button>
      </div>
    )
  }
  goBack = () => {
    history.push('/')
  }
}