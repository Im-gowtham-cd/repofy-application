import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import HomeStyle from './css/Home.module.css'
import Cursor from './Cursor'

export default function Home() {
  const { name } = useParams()
  const [createRoom, setCreateRoom] = useState(false)
  const [joinRoom, setJoinRoom] = useState(false)

  const navigate = useNavigate()

  const Logout = () => {
    navigate('/')
  }


  return (
    <>
      <Cursor name={name} />

      {
        createRoom ? (
          <>
            <div className={HomeStyle.createroomcontainer}>
              <h1 className={HomeStyle.RoomTitle}>Create Room</h1>
              <div className={HomeStyle.RoomContent}>
                <form action="">
                  <span><input type="text" name="" id="" /></span>
                  <span><input type="text" name="" id="" /></span>
                  <span>
                    <p>Do you want your room as public / private</p>
                    <select name="" id="">
                      <option value="Public"><p>Public</p></option>
                      <option value="Private">Private</option>
                    </select>
                  </span>
                  <span><input type="text" name="" id="" /></span>
                  <span><input type="text" name="" id="" /></span>
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
            <p className={HomeStyle.navTitleDes}>Report and Classroom Manager</p>
            <li>Room</li>

            {
              joinRoom ? (
                <form className={HomeStyle.joinroom}>
                  {/* <p className={HomeStyle.joinroomtext}></p> */}
                  <input type="text" name="" id="" placeholder="Enter Room Id" />
                  <button onClick={() => setJoinRoom(false)} > Join </button>
                  <button onClick={() => setJoinRoom(false)}> Close </button>
                </form>
              ) : (
                <ul className={HomeStyle.RoomLink}>
                  <button onClick={() => setCreateRoom(true)}>Create</button>
                  <button onClick={() => setJoinRoom(true)}> Join</button>
                </ul>
              )
            }
            <ul className={HomeStyle.navLinkSection}>
              <li>Home</li>
              <li>Dashboard</li>
              <li>Billing</li>
              <li>Help</li>
            </ul>


          </ul>
          <button className={HomeStyle.Logout} onClick={Logout}>LogOut</button>
        </nav>
      </div>return
    </>
  )
}
