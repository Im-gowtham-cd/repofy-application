import LoginStyle from './css/Login.module.css'
import i1 from '../assets/image/border.png'

export default function Login() {
  return (
    <>
      <div className={LoginStyle.loginForm}>
        <img src={i1} alt="" srcset="" className={LoginStyle.border} />
        <img src={i1} alt="" srcset="" className={LoginStyle.border} />
        <h1 className={LoginStyle.title}>Repofy</h1>
        <form method="POST" action="" className={LoginStyle.Form}>
          <span className={LoginStyle.span}><input type="text" name="username" id="" placeholder='Username' className={LoginStyle.input} /></span>
          <span className={LoginStyle.span}><input type="password" name="password" id="" placeholder='Password' className={LoginStyle.input} /></span>
          <span className={LoginStyle.span}><input type="submit" value="Login" className={LoginStyle.input} /></span>
          <span className={LoginStyle.or}>Or</span>
          <div className={LoginStyle.plat}>
            <i className="bxl bx-google" />
            <i className="bxl bx-facebook" />
            <i className="bxl bx-github" />
          </div>
          <p className={LoginStyle.register}>Don't have an account? <a href="/register">Register</a></p>
          <p className={LoginStyle.register}><a href="/register">Forgot Password ?</a></p>
        </form>
        <ul className={LoginStyle.users}>
          <li className={LoginStyle.user}></li>
          <li className={LoginStyle.user}></li>
          <li className={LoginStyle.user}></li>
          <li className={LoginStyle.user}>68+Users</li>
        </ul>
      </div>
    </>
  )
}