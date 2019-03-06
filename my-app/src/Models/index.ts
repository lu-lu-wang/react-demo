export const count = {
  state: 0,
  reducers: {
    increment(state: any, payload:any){
      return {
        ...state,
        payload
      }
    }
  },
  effects:(dispatch: any)=> ({
    async incrementAsync(payload: any, rootState: any){
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.count.increment(payload)
    }
  })
}