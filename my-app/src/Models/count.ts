const count = {
  state: {
    num: 1,
    type: 2
  },
  reducers: {
    increment(state: any, payload: any) {
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: (dispatch: any) => ({
    async incrementAsync(payload: any, rootState: any) {
      await new Promise(resolve => setTimeout(resolve, 100))
      dispatch.count.increment(payload)
    }
  })
}
export default count
