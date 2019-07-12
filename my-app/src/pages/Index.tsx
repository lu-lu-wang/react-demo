import React from 'react'
import history from '../app/history'
import { connect } from 'react-redux'
import './Index.less'

export interface IndexProps { 
  newDate: any
  countDownTime: any
}
const mapStateToProps = (state: any) => ({
  count: state.count
})
const mapDispatchToProps = (dispatch: any) => ({
  countDispatch: (num: any)=> dispatch.count.incrementAsync(num)
})
type connectedProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>
type Props = Partial<connectedProps>

class Index extends React.Component<Props, IndexProps> {
  timer?: any;
  countDown?: any;
  state: Readonly<IndexProps> = {
    newDate: new Date(),
    countDownTime: ''
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(),1000)
    const { countDispatch } = this.props;
    countDispatch && countDispatch({ num: 1 })
    this.getCountDown(10)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
    clearInterval(this.countDown)
  }
  tick(){
    this.setState({ newDate: new Date() });
  }
  render() {
    const { count } = this.props
    const { newDate } = this.state
    return (
      <div className="IndexContent">
        <p className="time" onClick={this.goMoment}>当前时间: {newDate.toLocaleTimeString()}</p>
        <p id="countDown1">获取倒计时: {this.state.countDownTime}</p>
        <p>{count.num}</p>
        <button onClick={this.goMy}>+</button>
        <button onClick={this.goLodash}>Lodash</button>
        <button onClick={this.goGrid}>Grid布局</button>
        <button onClick={this.goLoft}>楼层</button>
        <button onClick={this.goProduct}>商品</button>
      </div>
    )
  }
  goMy = () => {
    const { countDispatch, count: { num } } = this.props
    let newNum = num + 1
    countDispatch && countDispatch({ num: newNum })
    if (num === 10) {
      history.push('./my')
    }
  }
  goLodash = () => {
    history.push('./lodash')
  }
  goGrid = () =>{
    history.push('./gridLayout')
  }
  goLoft = () => {
    history.push('./loft')
  }
  goMoment = () => {
    history.push('./moment')
  }
  goProduct = () => {
    history.push('./product')
  }
  getCountDown = (timestamp: any) => {
    let countDownTime
    setInterval(() => {
      if(timestamp === 0){
        return '0 天 ：00：00：00'
      }
      timestamp --
      const days = parseInt(timestamp / (60 * 60 * 24) + '')
      let hours: any = parseInt((timestamp % (60 * 60 * 24)) / (60 * 60) + '')
      let minutes: any = parseInt((timestamp % (60 * 60)) / 60 + '')
      let seconds: any = parseInt(timestamp % 60 + '')
      if (hours < 10) {
        hours = '0' + hours;
      }
      if (minutes < 10) {
        minutes =  '0' + minutes;
      }
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
     countDownTime = days + '天' + hours + ":" + minutes + ":" + seconds;
     this.setState({countDownTime})
   },1000);
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
