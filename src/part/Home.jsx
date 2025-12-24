import React from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import HomeStyle from './css/Home.module.css'

export default function Home() {
  const { name } = useParams()

  const navigate = useNavigate()

  const Logout = () =>{
    navigate('/')
  }

  return (
    <>
      <div className={HomeStyle.HomeSection}>
        <nav className={HomeStyle.Nav}>
          <h1 className={HomeStyle.navTitle}>Repofy</h1>
          <button className={HomeStyle.Logout} onClick={Logout}>LogOut</button>
        </nav>

        <div className={HomeStyle.HomeContainer}>
          <ul className={HomeStyle.WelcomeText}>
            <li>Welcome , </li>
            <li>{name}</li>
          </ul>
        </div>

      </div>
    </>
  )
}
