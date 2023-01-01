import React, { useState, useEffect } from 'react'
import axios from 'axios'
import classes from './Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { stockListActions } from '../store/stockListSlice'
import { fetchDataFromLocalStorage } from '../utils/localStorage'

let flag = 0
const Home = () => {
  const dispatch = useDispatch()
  const stockData = useSelector((state) => state.stockList)
  const [searchVal, setSearchVal] = useState('')
  const [shareName, setShareName] = useState('')
  const [sharePrice, setSharePrice] = useState('')
  const [err, setErr] = useState('')
  useEffect(() => {
    const val = searchVal.replace(' ', '')
    let URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${val}.BSE&outputsize=compact&apikey=6XSJYR27B46FUX54`

    const callingTimer = setTimeout(async () => {
      if (flag == 1) {
        try {
          const res = await axios.get(URL)
          console.log(res)
          setErr('')
          let name = res.data['Meta Data']['2. Symbol']
            .replace('"', '')
            .split('.')[0]
            .toUpperCase()
          setShareName(name)

          let price = res.data['Time Series (Daily)']['2022-08-05'][
            '1. open'
          ].replace('"', '')
          setSharePrice(price)
        } catch (error) {
          if (searchVal) {
            setErr('Please provide valid stock name...')
          }
          setShareName('')
          setSharePrice('')
        }
      }
    }, [500])

    flag = 1
    return () => {
      clearTimeout(callingTimer)
    }
  }, [searchVal])

  const addHandler = (e) => {
    if (shareName.length !== 0 && sharePrice.length !== 0) {
      const newData = [...stockData.stockList]
      let _id = new Date()
      newData.push({
        name: shareName,
        price: sharePrice,
        id: _id.toString(),
      })
      console.log('Home', newData)
      dispatch(stockListActions.addStock(newData))
    }
  }

  return (
    <div className={classes.home}>
      <h1>Home Screen</h1>
      <div className={classes.searchHeader}>
        <div className={classes.in}>
          <h1>Search Your Company</h1>
          <input type='text' onChange={(e) => setSearchVal(e.target.value)} />
        </div>
        <div>
          {err ? (
            <p style={{ textAlign: 'center' }}>
              <i>{err}</i>
            </p>
          ) : searchVal.length ? (
            <div className={classes.inData}>
              <h3>Stock : {shareName}</h3>
              <p>Rs : {sharePrice}</p>
              <button onClick={addHandler}>add to watch list</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Home
