import { createSlice } from '@reduxjs/toolkit'
import {
  fetchDataFromLocalStorage,
  addDataToLocalStorage,
  clearStorage,
} from '../utils/localStorage'

const initialState = {
  stockList: fetchDataFromLocalStorage(),
}

const stockListSlice = createSlice({
  name: 'stocks',
  initialState: initialState,
  reducers: {
    addStock(state, action) {
      clearStorage()
      state.stockList = [...action.payload]
      addDataToLocalStorage([...action.payload])
    },
    clearAllStocks(state) {
      state.stockList = []
      clearStorage()
    },
  },
})

export const stockListActions = stockListSlice.actions

export default stockListSlice
