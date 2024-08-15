import { useEffect } from 'react'
import './Home.css'
import SideBar from './LeftScreen/SideBar'
import Container from './RightScreen/Container'
import axios from 'axios'
import { useUsersContext } from './Context/UsersContext'
import {toast} from 'react-hot-toast'

const Home = () => {
  const {setUsers}=useUsersContext()
  const users=async()=>{
    try {
      const response=await axios.get('http://localhost:8000/users',{withCredentials:true})
      setUsers(response.data.message)
      
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }
  
  useEffect(()=>{
    users();
  },[])
  return (
    <div className='home'>
      <div className='left'>
        <SideBar/>
      </div>
      <div className='right'>
        <Container/>
      </div>
    </div>
  )
}

export default Home
{/* <div className='message'> 
        <div className='header1'>
          <Header/>
        </div>
        <div className='messageContainer1'>
          <MessageContainer/>
        </div> */}