import Login from './part/Login'
import Home from './part/Home'
import Cursor from './part/Cursor'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Cursor />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home/:name' element={<Home />} />
      </Routes>
    </>
  )
}