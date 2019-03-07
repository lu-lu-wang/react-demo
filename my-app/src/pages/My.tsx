import React from 'react'
import history from '../app/history'
import './My.less'
import { connect } from 'react-redux'

const mapState = (state: any) => ({
  info: state.info
})
const mapDispatch = (disaptch: any) => ({
  infoDispatch: disaptch.info
})

type connectedProps = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch>
type Props = Partial<connectedProps>

class My extends React.Component<Props> {
  render() {
    const { info } = this.props
    return (
      <div className="content">
        <p>{info.name}</p>
        <button onClick={this.changeName}>改名啦</button>
      </div>
    )
  }
  changeName = () => {
    const { infoDispatch } = this.props
    infoDispatch.getUserInfo({ name: 'zhanghao' })
    this.back()
  }
  back = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    history.push('/')
  }
}
export default connect(
  mapState,
  mapDispatch
)(My)
