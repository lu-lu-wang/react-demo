import React from 'react'
import { connect } from 'react-redux'
import { Tabs, List } from 'antd-mobile'
import { StickyContainer, Sticky } from 'react-sticky';
import TouchMove from '../../components/TouchMove'
const Item = List.Item
import './index.less'
const mapState = (state: any) => ({
  product: state.product,
  address: state.address
})
const mapDispatch = (disptach: any)=>({
  getProduct: ()=> disptach.product.asyncGetProduct(),
  getAddressList: () => disptach.address.getAddressList(),
  deleteAddress: (id?: any) => disptach.address.deleteAddress(id)
})
interface State {
  startX: number
}
type connectedProps = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch>;

type Props = Partial<connectedProps>;

class Product extends React.Component<Props, State>{
  state: Readonly<State> = {
    startX: 0
  }
  componentDidMount(){
    const { getProduct, getAddressList } = this.props;
    getProduct && getProduct()
    getAddressList && getAddressList()
  }
  render(){
    const { product: { categoryLists } } = this.props;
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
        <StickyContainer>
          <Tabs tabs={tabs}
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
        {this.renderReactDom()}
        {this.renderList()}
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
  renderReactDom = () => {
    return (
          <Test>
            <span>1</span>
            <span>2</span>
          </Test>
    );
  }
  renderList = () => {
    const { address: { addressLists: { result } } } = this.props;
    if(result.length === 0){
      return null;
    }
    return (
      <div id="collect">
        <div className="collectList">
        {result && result.map((item: any, index: any)=>{
          return (
            <div>
              <TouchMove
                key={index}  
                clickRemove={()=>this.clickRemove(index, item.addrId)}
                isClose={item.isClose}
                toOpen={()=>this.toOpen(index)}
                toClose={()=>this.toClose(index)}
              >
                <div key={item.id} className="collectItem onePx_bottom">
                  <div className="collectMsg">
                    <div>{item.consignee_mobile}</div>
                  </div>
                </div>
              </TouchMove>
            </div>
          )
        })
        }
        </div>
      </div>
    )
  }
  toClose = (index: any) => {
    const { address: { addressLists: { result } } } = this.props;
    const collect = new Array(...result)
    collect.forEach((item) => {
      item.isClose = true
    })
    this.forceUpdate();
  }
  toOpen = (item: any)=> {
    const { address: { addressLists: { result } } } = this.props;
    const collect = new Array(...result)
    collect.forEach((item) => {
      item.isClose = true
    })
    collect[item].isClose = false
    this.forceUpdate();
  }
  clickRemove =  async (index: any, item: any) => {
    const { address: { addressLists: { result } }, deleteAddress } = this.props;
    const collect = new Array(...result)
    collect.splice(index,1)
    deleteAddress && deleteAddress(item)
  }
}
const Test = (props: any) => {
  return(
    <div>{ React.Children.map(props.children,c => [[c, c]]) }</div>
  ) 
}
export default connect(mapState,mapDispatch)(Product)