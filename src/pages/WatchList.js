import React from 'react'
import classes from './WatchList.module.css'
import { useSelector, useDispatch } from 'react-redux'
import SingleStock from './SingleStock'
import { stockListActions } from '../store/stockListSlice'

const WatchList = () => {
  const dispatch = useDispatch()
  const stockData = useSelector((state) => state.stockList)
  const list = stockData.stockList

  const clearHandler = () => {
    dispatch(stockListActions.clearAllStocks())
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>My WatchList</h1>
      {list.length ? (
        <div className={classes.watchList}>
          <table>
            <tr>
              <th>Stock Name</th>
              <th>Price in Rupees</th>
            </tr>
            {list &&
              list.map((each) => (
                <SingleStock key={each.id} each={each} list={list} />
              ))}
          </table>
          <button onClick={clearHandler}>clear watch list</button>
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>
          <i>looks empty !</i>
        </p>
      )}
    </div>
  )
}

export default WatchList
