import React from 'react'
import history from '../app/history'
import { connect } from 'react-redux'
import './Index.less'
const mapStateToProps = (state: any) => ({
  count: state.count
})
const mapDispatchToProps = (dispatch: any) => ({
  countDispatch: (num: any)=> dispatch.count.incrementAsync(num)
})
type connectedProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>
type Props = Partial<connectedProps>

class Index extends React.Component<Props> {
  componentDidMount() {
    const { countDispatch } = this.props;
    countDispatch && countDispatch({ num: 1 })
  }
  render() {
    const { count } = this.props
    console.log(count)
    return (
      <div className="content">
        <p>{count.num}</p>
        <button onClick={this.goMy}>+</button>
        <button onClick={this.goLodash}>Lodash</button>
        <button onClick={this.goGrid}>Grid布局</button>
        <button onClick={this.goLoft}>楼层</button>
      </div>
    )
  }
  goMy = () => {
    const {
      countDispatch,
      count: { num }
    } = this.props
    console.log('this.props', this.props)
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
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
