import Login from './part/Login'
import Home from './part/Home'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home/:name' element={<Home />} />
      </Routes>
    </>
  )
}