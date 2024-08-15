import './LeftBar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios'
import { useAuthContext } from '../Context/AuthContext';

const LeftBar = () => {
  const {setAuthUser}=useAuthContext()
  const logout=async()=>{
    try{
      console.log('i')
      const response=await axios.post('http://localhost:8000/auth/logout')
      console.log(response)
      localStorage.removeItem('chat-user')
      setAuthUser(null)
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div className="leftBar">
      <div className='chat'>
        <ChatBubbleOutlineIcon/>
      </div>
      <div className='account'>
        <AccountCircleIcon/>
        <LogoutIcon onClick={logout} />
      </div>
    </div>
  )
}

export default LeftBar
