import { useState } from 'react'
import "./Login.css"
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useAuthContext } from './Context/AuthContext'
import {toast} from 'react-hot-toast'


const Login = () => {
  const navigation=useNavigate()
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const {setAuthUser}=useAuthContext()
  
  const login=async(e)=>
  {
    e.preventDefault()
    try {
      const response=await axios.post('http://localhost:8000/auth/signIn',{username,password})

      if(response.data.message==='login success')
      {
        localStorage.setItem("chat-user",JSON.stringify(response.data))
        setAuthUser(response.data.id)
        navigation('/')
      }
      else
      toast.error(response.data.message)
      console.log(response.data);
    } catch (error) {
      toast.error(error)
      console.log(error)
    }

  }
  return (
    <div className='register'>
      <div className='container'>

        <h2>App</h2>
        <form className='form'>
          <span> Username</span>
          <input value={username} onChange={(e)=>setUsername(e.target.value)}/>

          <span>Password</span>
          <input value={password} onChange={(e)=>setPassword(e.target.value)}/>

          <button type='submit' onClick={login}>Login</button>
        </form>
        <span>New user ?</span>
        <Link to='/signUp'>
          <button className='button'>Create your account</button>
        </Link>
      </div>
    </div>
  )
}

export default Login
