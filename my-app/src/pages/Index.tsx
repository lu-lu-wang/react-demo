import React from 'react'
import history from '../app/history'
import { connect } from 'react-redux'
import './Index.less'

export interface IndexProps { 
  newDate: any
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
  state: Readonly<IndexProps> = {
    newDate: new Date()
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(),1000)
    const { countDispatch } = this.props;
    countDispatch && countDispatch({ num: 1 })
  }
  componentWillUnmount(){
    clearInterval(this.timer)
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
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
