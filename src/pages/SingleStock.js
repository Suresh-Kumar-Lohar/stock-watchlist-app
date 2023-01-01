import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stockListActions } from '../store/stockListSlice'

const SingleStock = ({ each, list }) => {
  const dispatch = useDispatch()

  const removeHandler = () => {
    const newData = list.filter((item) => item.id !== each.id)
    dispatch(stockListActions.addStock(newData))
  }

  return (
    <tr>
      <td>{each.name}</td>
      <td>{each.price}</td>
      <button onClick={removeHandler}>remove</button>
    </tr>
  )
}

export default SingleStock
