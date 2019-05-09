import React from 'react'
import { connect } from 'react-redux'
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
    return (
      <div className="content">
        商品介绍页
      </div>
    )
  }
}
export default connect(mapState,mapDispatch)(Product)