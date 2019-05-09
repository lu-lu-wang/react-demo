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
        payload
      }
    }
  },
  effects: (dispatch: any) =>({
    asyncGetProduct: async ()=>{
      try {
        const json = await getProduct();
        // console.log('json', json)
        dispatch.product.setProduct(json)
      } catch (error) {
        console.log('error', error)
      }
    }
  })
}
export default product;