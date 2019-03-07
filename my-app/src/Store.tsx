import { init } from '@rematch/core'
import count from './Models/count'
import info from './Models/info'

const store = init({
  models: {
    count,
    info
  }
})
export default store
