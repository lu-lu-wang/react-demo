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
    const { product: { categoryLists } } = this.props;
    console.log(categoryLists)
    interface categoryItem {
      category_id: '',
      category_name: ''
    }
    return (
      <div className="content">
        商品介绍页
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          {
            categoryLists.map((item: categoryItem)=>{
              return (
                <TabPane tab={item.category_name} key={item.category_id}>{item.category_name}</TabPane>
              )
            })
          }
        </Tabs>
      </div>
    )
  }
  callback= (key: string) => {
    console.log(key);
  }
}
export default connect(mapState,mapDispatch)(Product)