import './App.css'
import { Redirect, Route } from 'react-router-dom'
import Nav from './components/Header/Nav'
import Home from './pages/Home'
import WatchList from './pages/WatchList'

function App() {
  return (
    <>
      <Nav />
      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/watchlist'>
        <WatchList />
      </Route>
    </>
  )
}

export default App
