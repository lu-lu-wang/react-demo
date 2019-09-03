import React from 'react'
import { connect } from 'react-redux'
import { Tabs, List } from 'antd-mobile'
import { StickyContainer, Sticky } from 'react-sticky';
// import TouchMove from '../../components/TouchMove'
import { ImageLazy } from '../../components/ImageLazy'
const Item = List.Item
import './index.less'
import { Row, Col } from 'antd';
import _ from 'lodash';

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
  startX: number,
  isDelete: boolean
}
type connectedProps = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch>;

type Props = Partial<connectedProps>;

class Product extends React.Component<Props, State>{
  state: Readonly<State> = {
    startX: 0,
    isDelete: false
  }
  componentDidMount(){
    const { getProduct, getAddressList } = this.props;
    // getProduct && getProduct()
    // getAddressList && getAddressList()
  }
  render(){
    const { product: { categoryPartList } } = this.props;
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
        {this.renderGoodsCard()}
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
      return <div className="noAddress">暂无地址信息</div>;
    }
    return (
      <div id="collect">
        <div className="collectList">
        {result && result.map((item: any, index: any)=>{
          return (
            <List>
              <Item>
                <div 
                  key={item.id} 
                  className="collectItem"
                  onTouchStart = {this.handelTouchStart}
                  onTouchMove = {(e)=>this.handelTouchMove(e,index)}
                >
                  <div className={item.isClose ? 'test' : 'test left'}>
                    {item.consignee_mobile}
                  </div>
                  <div className="close" onClick={()=>this.clickRemove(index,item.addrId)}>删除</div>
                </div>
              </Item>
            </List>
          )
        })
        }
        </div>
      </div>
    )
  }
  handelTouchStart = (e: any) => {
    const Touch = e.touches[0]
    this.setState({
      startX: Touch.pageX
    })
  }
  handelTouchMove = (e: any, index: any) => {
    const _Touch = e.touches[0]
    const { address: { addressLists: { result } } } = this.props;
    const copyResult = new Array(...result)
    copyResult.forEach((item) => {
      item.isClose = true
    })
    if(this.state.startX>_Touch.pageX+10 && result[index].isClose){
      copyResult[index].isClose = false
    }
    if(this.state.startX < _Touch.pageX + 20 && !result[index].isClose){
      copyResult[index].isClose = true
    }
    this.forceUpdate();
  }
  
  // toClose = (index: any) => {
  //   const { address: { addressLists: { result } } } = this.props;
  //   const collect = new Array(...result)
  //   collect.forEach((item) => {
  //     item.isClose = true
  //   })
  //   this.forceUpdate();
  // }
  // toOpen = (item: any)=> {
  //   const { address: { addressLists: { result } } } = this.props;
  //   const collect = new Array(...result)
  //   collect.forEach((item) => {
  //     item.isClose = true
  //   })
  //   collect[item].isClose = false
  //   this.forceUpdate();
  // }
  clickRemove =  async (index: any, item: any) => {
    const { address: { addressLists: { result } }, deleteAddress } = this.props;
    const collect = new Array(...result)
    collect.splice(index,1)
    deleteAddress && deleteAddress(item)
  }
  renderGoodsCard = () => {
    const { product: { categoryPartList } } = this.props;
    const list = categoryPartList && _.chunk(categoryPartList, 10)[0]
    return (
      <div className="goodsCard">
      {list && list.map((item: any)=>{
        return (
            <div className="goodsCardItem">
              <div className="goodsCard__flex">
                <div>
                  <ImageLazy 
                    realUrl={item.goods_icon} 
                    offSetTop={0}
                    initUrl='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg'
                  />
                </div>
                <div>{item.goods_title}</div>
                <div className="goodsCard__price">￥{item.actual_price}</div>
              </div> 
            </div>
        )
      })}
      </div>
    )
  }
}
const Test = (props: any) => {
  return(
    <div>{ React.Children.map(props.children,c => [[c, c]]) }</div>
  ) 
}
export default connect(mapState,mapDispatch)(Product)