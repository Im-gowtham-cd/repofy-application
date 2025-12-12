import React, { useState } from 'react';
import LoginStyle from './css/Login.module.css'
import i1 from '../assets/image/border.png'
import { db, ID } from '../lib/appwrite';
// import Date from 'date-fns/format';

export default function Login() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function Register(e) {
    e.preventDefault();

    try {
      const data = await db.createDocument("repofyid", 'users', ID.unique(), {
        name,
        email,
        password,
        createdAt: new Date().toISOString(),
      });
      console.log(data);
    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className={LoginStyle.loginForm}>
        <img src={i1} alt=""  className={LoginStyle.border} />
        <img src={i1} alt=""  className={LoginStyle.border} />
        <h1 className={LoginStyle.title}>Repofy</h1>

        {login ? (
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
            <p className={LoginStyle.register}>Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); setLogin(false); }}>Register</a></p>
            <p className={LoginStyle.register}><a href="#">Forgot Password ?</a></p>
          </form>
        ) : (
          <form method="POST" onSubmit={Register} className={LoginStyle.Form}>
            <span className={LoginStyle.span}><input type="text" name="username" id="" placeholder='Username' className={LoginStyle.input} onChange={(e) => setName(e.target.value)} value={name} /></span>
            <span className={LoginStyle.span}><input type="email" name="email" id="" placeholder='Email' className={LoginStyle.input} onChange={(e) => setEmail(e.target.value)} value={email} /></span>
            <span className={LoginStyle.span}><input type="password" name="password" id="" placeholder='Password' className={LoginStyle.input} onChange={(e) => setPassword(e.target.value)} value={password} /></span>
            {/* <span className={LoginStyle.span}><input type="password" name="confirmPassword" id="" placeholder='Confirm Password' className={LoginStyle.input} /></span> */}
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
      </div>
    </>
  )
}