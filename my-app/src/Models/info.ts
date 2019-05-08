const info = {
  state: {
      name: 'wanglu',
      age: '27'
  },
  reducers: {
    setUserInfo: (state: any, payload: any)=>{
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: (dispatch: any)=>({
    async getUserInfo(payload: any, rootState: any){
      // 模拟异步
      // console.log('获取所有的state', rootState)
    await new Promise(resolve => setTimeout(resolve,200))
      dispatch.info.setUserInfo(payload)
    }
  })
};
export default info