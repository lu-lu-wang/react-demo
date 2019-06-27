import React, { useEffect, useState } from 'react'
import { Modal, Input, Button } from 'antd'
import axios from 'axios'

// function Index(){
//   const [product, getProduct]= useState()
//   function getItem () {
//     axios({
//       method: 'POST',
//       headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//       url: 'http://test.webapi.sunmi.com/webapi/misun/web/manage/1.0/?service=Finance.confirmOrderDetail',
//       data: {"adminId":"d42398ec9b28c6157b27c50a7503ce4e","confirm_id":"68"}
//     })
//     .then(res=>{
//       getProduct(res.data)
//     })
//     .catch((err: any)=>console.log(err))
//   }
//   useEffect(()=>{
//     getItem()
//     // document.title = `${count}`
//   },[])
//   return (
//     <div className="content">
//       {product}
//       {/* <button onClick={()=>setCount(count+1)}>click me</button> */}
//     </div>
//   )
// }
export interface State {
  show: boolean,
  loading: boolean
}
class Index extends React.Component{
  constructor(props: any){
    super(props);
  }
  state: Readonly<State> = {
    show: true,
    loading: false
  }
  render () {
    return (
      <div>
        <Button type="primary" onClick={()=> this.onOk()}>click me!</Button>
        <Modal
          visible={this.state.show}
          onCancel={()=> this.cancel()}
          onOk={()=>this.cancel()}
          destroyOnClose={true}
          width={520}
          confirmLoading={this.state.loading}
        >
          <Input placeholder="请输入"/>
        </Modal>
      </div>
    )
  }
  cancel = () =>{
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        show: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  onOk = () => {
    this.setState({show: true})
  }
}
export default Index;
