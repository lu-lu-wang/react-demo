import { addressList, deleteAddress } from '../services/product' 
import { message } from 'antd';
const initialState = {
  addressLists: {
    result: []
  }
};
const address = {
  state: initialState,
  reducers: {
    setAddress: (state: any, payload: any) => {
      return {
        ...state,
        addressLists: {
          ...state.addressLists, 
          ...payload,
          result: payload.result.map((item: any)=>({...item, isClose: true}))
        }
      }
    }
  },
  effects: (dispatch: any) => ({
    getAddressList: async() => {
      try {
        const { data } = await addressList()
        dispatch.address.setAddress(data)
      } catch (error) {
        console.error(error)
      }
    },
    deleteAddress: async (id?: string) => {
      try {
        await deleteAddress(id)
        message.success('删除成功！')
        dispatch.address.getAddressList()
      } catch (error) {
        console.error(error)
      }
    }
  })
}

export default address