export const fetchDataFromLocalStorage = () => {
  const rawData = localStorage.getItem('stocksList')
  let data
  if (rawData) {
    data = JSON.parse(rawData)
  } else {
    data = []
  }
  // console.log(data)
  return data
}

export const addDataToLocalStorage = (list) => {
  // console.log('list : ', list)
  localStorage.setItem('stocksList', JSON.stringify(list))
}

export const clearStorage = () => {
  localStorage.clear()
}
