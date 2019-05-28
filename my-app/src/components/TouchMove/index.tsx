import React, {Component} from 'react'
import './index.less'
class TouchMove extends Component<any, any>{
  state={
    startX: 0
  }
  static defaultProps: { toClose: () => null; toOpen: () => null; closeName: string; isClose: boolean; };
  clickRemove () {
    this.props.clickRemove()
  }
  touchStartDom = (e: any)=>{
    const _touch = e.touches[0]
    this.setState({
      startX: _touch.pageX
    })
  }
  touchMoveDom = (e: any) =>{
    const _touch = e.touches[0]
    if(this.state.startX>_touch.pageX+20 && this.props.isClose){
      this.props.toOpen()
    }
    if(this.state.startX<_touch.pageX-20 && !this.props.isClose){
      this.props.toClose()
    }
  }
  render () {
    const classNames = this.props.isClose ? 'test':'test left'
    return (
      <div className="touchClear">
        <div className={classNames} onTouchStart={this.touchStartDom}
             onTouchMove={this.touchMoveDom}>
          {this.props.children}
        </div>
        <div className="colse" onClick={this.clickRemove.bind(this)}>
          {this.props.closeName}
        </div>
      </div>
    )
  }
}
TouchMove.defaultProps = {
  toClose: () => null,
  toOpen: () => null,
  closeName: '删除',
  isClose: true
}
export default TouchMove
