
import { Route, Routes } from 'react-router-dom'
import './Index.css'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {

  return (
    <>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path='/Detail' element={<Detail />}></Route>
      </Routes>
    </>
  )
}

export default App
