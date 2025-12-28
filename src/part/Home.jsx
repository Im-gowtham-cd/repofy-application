import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import HomeStyle from './css/Home.module.css'

export default function Home() {
  const { name } = useParams()

  const navigate = useNavigate()

  const Logout = () => {
    navigate('/')
  }

  return (
    <>
      <div className={HomeStyle.HomeSection}>
        <h1 className={HomeStyle.NameDisplay}>Welcome , {name}</h1>
        <nav className={HomeStyle.Nav}>
          <h1 className={HomeStyle.navTitle}>Repofy</h1>
          <ul className={HomeStyle.navLink}>
            <li>Room</li>
            <ul className={HomeStyle.RoomLink}>
              <button>Create</button>
              <button>Join</button>
            </ul>
          </ul>
          <button className={HomeStyle.Logout} onClick={Logout}>LogOut</button>
        </nav>
      </div>return
    </>
  )
}
