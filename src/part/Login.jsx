import React, { useState } from 'react';
import LoginStyle from './css/Login.module.css'
import i1 from '../assets/image/border.png'

export default function Login() {

  const [message, setMessage] = useState("")
  const [AlertSuccessMsg, setAlertSuccessMsg] = useState(false)
  const [AlertFailMsg, setAlertFailMsg] = useState(false)
  // const [user, setUser] = useState({})
  const [login, setLogin] = useState(true)
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const dataEntry = async e => {
    setData({
      ...data, [e.target.name]: e.target.value
    })
  }

  const Login = async (e) => {
    e.preventDefault()

    setAlertFailMsg(false)
    setAlertSuccessMsg(false)

    try {
      // const result = await fetch(`http://localhost:8080/login/${data.email}`)
      const result = await fetch(`https://repofybackend-production.up.railway.app/login/${data.email}`)
      const user = await result.json()

      if (!result.ok) {
        setMessage(user.message)
        setAlertFailMsg(true)
        setTimeout(() => {
          setAlertFailMsg(false)
        }, 5000);
        return
      }

      if (user.password !== data.password) {
        setMessage("Incorrect password 🥲")
        setAlertFailMsg(true)
        setTimeout(() => {
          setAlertFailMsg(false)
        }, 5000);
        return
      }

      setMessage("Login successful 😁👌")
      setAlertSuccessMsg(true)
      setTimeout(() => {
        setAlertSuccessMsg(false)
      }, 5000);
      return

    } catch (err) {
      console.error(err)
      setMessage("Server Error ... 😅")
      setAlertFailMsg(true)
      setTimeout(() => {
        setAlertFailMsg(false)
      }, 5000)
    }
  }


  const Register = async e => {
    e.preventDefault()

    try {
      const result = await fetch("https://repofybackend-production.up.railway.app/signup", {
      // const result = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })

      // const newUser = result.json()
      // console.log(newUser)

      setMessage("Register successful 😁👌")
      setAlertSuccessMsg(true)
      setTimeout(() => {
        setAlertSuccessMsg(false)
        setLogin(true)
      }, 1000);
      // setLogin(true)

      setData({
        name: "",
        email: "",
        password: ""
      })

    }
    catch (err) {
      console.error(err)
    }
  }

  const items = ["Repofy", "Repofy", "Repofy", "Repofy", "Repofy"];

  return (
    <>
      <div className={LoginStyle.loginForm}>

        {/* <img src={i1} alt="" className={LoginStyle.border} /> */}
        {/* <img src={i1} alt="" className={LoginStyle.border} /> */}

        <div className={LoginStyle.infiniteScroll}>
          {[1, 2].map((_, index) => (
            <ul
              key={index}
              aria-hidden={index === 1}
              className={LoginStyle.infiniteScrollContent}
            >
              {items.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          ))}
        </div>

        <div className={LoginStyle.infiniteScroll}>
          {[1, 2].map((_, index) => (
            <ul
              key={index}
              aria-hidden={index === 1}
              className={LoginStyle.infiniteScrollContent}
            >
              {items.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          ))}
        </div>

        <h1 className={LoginStyle.title}>Repofy</h1>

        {login ? (
          <form onSubmit={Login} className={LoginStyle.Form}>
            <span className={LoginStyle.span}><input type="email" name="email" id="" placeholder='Email' className={LoginStyle.input} onChange={dataEntry} /></span>
            <span className={LoginStyle.span}><input type="password" name="password" id="" placeholder='Password' className={LoginStyle.input} onChange={dataEntry} /></span>
            <span className={LoginStyle.span}><input type="submit" value="Login" className={LoginStyle.input} /></span>
            <span className={LoginStyle.or}>Or</span>
            <div className={LoginStyle.plat}>
              <i className="bxl bx-google" />
              <i className="bxl bx-facebook" />
              <i className="bxl bx-github" />
            </div>
            <p className={LoginStyle.register}>Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); setLogin(false); }}>Register</a></p>
            <p className={LoginStyle.register}><a href="#">Forgot Password ?</a></p>
          </form>
        ) : (
          <form onSubmit={Register} className={LoginStyle.Form}>
            <span className={LoginStyle.span}><input type="text" name="name" id="" placeholder='Name' className={LoginStyle.input} onChange={dataEntry} /></span>
            <span className={LoginStyle.span}><input type="email" name="email" id="" placeholder='Email' className={LoginStyle.input} onChange={dataEntry} /></span>
            <span className={LoginStyle.span}><input type="password" name="password" id="" placeholder='Password' className={LoginStyle.input} onChange={dataEntry} /></span>
            <span className={LoginStyle.span}><input type="submit" value="Sign Up" className={LoginStyle.input} /></span>
            <span className={LoginStyle.or}>Or</span>
            <div className={LoginStyle.plat}>
              <i className="bxl bx-google" />
              <i className="bxl bx-facebook" />
              <i className="bxl bx-github" />
            </div>
            <p className={LoginStyle.register}>Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); setLogin(true); }}>Login</a></p>
          </form>
        )}

        <ul className={LoginStyle.users}>
          <li className={LoginStyle.user}></li>
          <li className={LoginStyle.user}></li>
          <li className={LoginStyle.user}></li>
          <li className={LoginStyle.user}>68+Users</li>
        </ul>

        {
          AlertSuccessMsg ? (
            <div className={LoginStyle.UserAlertSuccessContainer}>
              <p className={LoginStyle.UserAlertSuccess}>{message}</p>
            </div>
          ) : (
            <></>
          )
        }

        {
          AlertFailMsg ? (
            <div className={LoginStyle.UserAlertFailContainer}>
              <p className={LoginStyle.UserAlertFail}>{message}</p>
            </div>
          ) : (
            <></>
          )
        }

      </div>
    </>
  )
}