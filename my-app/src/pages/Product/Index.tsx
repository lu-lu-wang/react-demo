import React from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd-mobile'
import { StickyContainer, Sticky } from 'react-sticky';

// const TabPane = Tabs.TabPane

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
    const tabs = [
      { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ];
    return (
      <div>
        {/* 商品介绍页
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          {
            categoryLists.map((item: categoryItem)=>{
              return (
                <TabPane tab={item.category_name} key={item.category_id}>{item.category_name}</TabPane>
              )
            })
          }
        </Tabs> */}
        <StickyContainer>
          <Tabs tabs={tabs}
            // initalPage={'t2'}
            renderTabBar={this.renderTabBar}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of first tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of second tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of third tab
            </div>
          </Tabs>
        </StickyContainer>
      </div>
    )
  }
  callback= (key: string) => {
    console.log(key);
  }
  renderTabBar= (props?: any)=> {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
  }
}
export default connect(mapState,mapDispatch)(Product)