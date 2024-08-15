import { useState } from 'react'
import './Text.css'
import axios from 'axios'
import SendIcon from '@mui/icons-material/Send';
import { useMessageContext } from '../Context/MessageContext';

const Text = () => {
    const [message,setMessage]=useState('')
    const {receiverId}=useMessageContext()
    const sendMess=async()=>{
      try {
        const response=await axios.post(`http://localhost:8000/message/send/${receiverId}`,{message},{withCredentials:true})
        setMessage('')
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div className='text'>
      <span className='input'>
        <input placeholder='Enter the text' value={message} onChange={(e)=>setMessage(e.target.value)}/>
      </span>
      <span className='button' onClick={()=>sendMess(message)}>
        <SendIcon/>
      </span>
    </div>
    
  )
}

export default Text
