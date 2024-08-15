  import Conversation from "./Conversation"
  import LeftBar from "./LeftBar"
  import SearchBox from "./SearchBox"
  import './SideBar.css'
  import { useUsersContext } from "../Context/UsersContext"
  import axios from "axios"
  import { useMessageContext } from "../Context/MessageContext"
  import { useEffect } from "react"
  import io from 'socket.io-client'
  const socket=io('http://localhost:8000',{withCredentials:true})


  const SideBar = () => {
    const {users}=useUsersContext();
    const {conversation,setConversation}=useMessageContext()
    const {setFlag}=useMessageContext()
    const {setReceiverId}=useMessageContext()
    const {setReceiverName}=useMessageContext()
    const data=async(user)=>{
      try {
        setFlag(true)
        setReceiverId(user._id)
        setReceiverName(user.fullname)

        const response=await axios.get(`http://localhost:8000/message/get/${user._id}`,{withCredentials:true})
        setConversation(response.data)
        console.log(conversation)
      } catch (error) {
        console.log(error.message)
      }
    }
    const setData=(setData)=>{
      setConversation(setData)
    }
    useEffect(()=>{
        socket.on('setData',setData)
        return ()=>{
          socket.off('setData',setData)
        }
    })
    return (
      <div className="sideBar">
        <div className="bar">
          <LeftBar/>
        </div>
        <div className="">
          <div className="search1">
            <SearchBox/>
          </div>
          {users?.map((user,index)=>(
            <div className="conversation1"  key={index} onClick={()=>data(user)}>
              <Conversation  user={user}/>
            </div>
              ))}
        </div>
      </div>
    )
  }

  export default SideBar
