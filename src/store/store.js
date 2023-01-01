import { configureStore } from '@reduxjs/toolkit'
import stockListSlice from './stockListSlice'

const store = configureStore({
  reducer: { stockList: stockListSlice.reducer },
})

export default store
