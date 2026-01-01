import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import HomeStyle from './css/Home.module.css'

export default function Home() {
  const { name } = useParams()
  const [createRoom, setCreateRoom] = useState(false)

  const navigate = useNavigate()

  const Logout = () => {
    navigate('/')
  }

  return (
    <>
      {
        createRoom ? (
          <>
            <div className={HomeStyle.createroomcontainer}>
              <h1 className={HomeStyle.RoomTitle}>Create Room</h1>
              <div className={HomeStyle.RoomContent}>
                  <form action="">
                    
                  </form>
              </div>
              <ul className={HomeStyle.RoomSubmit}>
                <button className={HomeStyle.CloseButton} onClick={() => setCreateRoom(false)}>Create</button>
                <button className={HomeStyle.CloseButton} onClick={() => setCreateRoom(false)}>Close</button>
              </ul>
            </div>
          </>
        ) : (
          <p></p>
        )
      }
      <div className={HomeStyle.HomeSection}>
        <h1 className={HomeStyle.NameDisplay}>Welcome , {name}</h1>
        <nav className={HomeStyle.Nav}>
          <h1 className={HomeStyle.navTitle}>Repofy</h1>
          <ul className={HomeStyle.navLink}>
            <li>Room</li>
            <ul className={HomeStyle.RoomLink}>
              <button onClick={() => setCreateRoom(true)}>Create</button>
              <button>Join</button>
            </ul>
          </ul>
          <button className={HomeStyle.Logout} onClick={Logout}>LogOut</button>
        </nav>
      </div>return
    </>
  )
}
