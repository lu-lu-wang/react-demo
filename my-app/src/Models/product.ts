import { getProduct } from '../services/product'
const product = {
  state: {
    categoryLists: [],
    categoryPartList: []
  },
  reducers: {
    setProduct: (state: any, payload: any) => {
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: (dispatch: any) =>({
    asyncGetProduct: async ()=>{
      try {
        const { data } = await getProduct();
        // console.log('json', json)
        dispatch.product.setProduct(data)
      } catch (error) {
        console.log('error', error)
      }
    }
  })
}
export default product;