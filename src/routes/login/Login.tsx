import React, { useState } from 'react'
// import { useForm } from 'react-hook-form'
import "./Login.css"
// import {IUser, useTypedDispatch} from "../../components/Types/Types"
import {User} from "../../components/Types/Types"
import { useDispatch } from 'react-redux'
import { log } from '../../redux/actions/actions'
import { loguin } from '../../services/Services'


function Login() {

  const dispatch=useDispatch()

  const [login, setlogin] = useState<User>(
    {
      user:"", 
      password:""
    })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    e.preventDefault()
    setlogin({...login, [e.target.name]:e.target.value})
  }
  
                ///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/
  function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    try {
      loguin(login)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='divLogin'>
      <h2>LOGIN</h2>
      <form onSubmit={onSubmit}>  
        <div>
          <input onChange={handleChange} name="user" type="email" placeholder="Usuario" value={login.user}/>
        </div>
        <div>
          <input onChange={handleChange} name="password" type="password" placeholder="password" value={login.password} />
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login