import React from 'react'
import { useParams } from 'react-router-dom'
import HomeStyle from './css/Home.module.css'

export default function Home() {
  const { name } = useParams()
  return (
    <>
      <div className={HomeStyle.HomeSection}>
          <h1 className={HomeStyle.WelcomeText}>Welcome To Home  {name} .. !</h1>
      </div>
    </>
  )
}
