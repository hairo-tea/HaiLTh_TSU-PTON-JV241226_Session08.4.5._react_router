
import { Route, Routes } from 'react-router-dom'
import './Index.css'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default App
