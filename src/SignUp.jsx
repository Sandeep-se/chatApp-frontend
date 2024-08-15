import { useState } from 'react'
import './SignUp.css'
import axios from "axios";
import { useAuthContext } from './Context/AuthContext'

const SignUp = () => {
  const [username,setUsername]=useState('')
  const [fullname,setFullname]=useState('')
  const [password,setPassword]=useState('')
  const {setAuthUser}=useAuthContext()
  const signUp=async(e)=>
  {
    e.preventDefault();
    try {
      const response=await axios.post('http://localhost:8000/auth/signUp',{fullname,username,password})
      console.log(response)
      localStorage.setItem("chat-user",JSON.stringify(response.data.id))
      setAuthUser(response.data.id)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='register'>
      <div className='container'>

        <h2>App</h2>
        <form className='form'>
          <span>Fullname</span>
          <input value={fullname} onChange={(e)=>setFullname(e.target.value)}/>

          <span> Username</span>
          <input value={username} onChange={(e)=>setUsername(e.target.value)}/>

          <span>Password</span>
          <input value={password} onChange={(e)=>setPassword(e.target.value)}/>

          <button onClick={signUp}>sign up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
