import React from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane

const mapState = (state: any) => ({
  product: state.product
})
const mapDispatch = (disptach: any)=>({
  getProduct: ()=> disptach.product.asyncGetProduct()
})

type connectedProps = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch>;

type Props = Partial<connectedProps>;

class Product extends React.Component<Props>{
  componentDidMount(){
    const { getProduct } = this.props;
    getProduct && getProduct()
  }
  render(){
    const { product } = this.props;
    console.log(product)
    return (
      <div className="content">
        商品介绍页
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane >
        </Tabs>
      </div>
    )
  }
  callback= (key: string) => {
    console.log(key);
  }
}
export default connect(mapState,mapDispatch)(Product)