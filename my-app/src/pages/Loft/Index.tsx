import React from 'react';
import './Index.less';
import { Anchor }  from 'antd';
const { Link } = Anchor;

export default class Loft extends React.Component {
  render(){
    return (
      <div className="container">
        <Anchor className="navbar">
          <Link href="#aliceblue" title="智能硬件" />
          <Link href="#antiquewhite" title="精选软件" />
          <Link href="#lavenderblush" title="解决方案"/>
          <Link href="#" title="回到顶部"/>
        </Anchor>
        <div className="anchorContent">
          <div id="aliceblue" className="aliceblue">智能硬件</div>   
          <div id="antiquewhite" className="antiquewhite">精选软件</div>
          <div id="lavenderblush" className="lavenderblush">解决方案</div>
        </div>
      </div>
    )
  }
}