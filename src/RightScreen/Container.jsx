import './Container.css'
import MessageContainer from './MessageContainer'
import { useMessageContext } from '../Context/MessageContext'
import { useAuthContext } from '../Context/AuthContext'

const Container = () => {
  const {flag}=useMessageContext();
  return (
    <div className='container1'>
      
      {!flag?(
      <div className='noChat1'>
          <NoChat/>
      </div>
      ):(
      <div className='message'> 
        <div className='messageContainer1'>
          <MessageContainer/>
        </div>
      </div>
      )}
    </div>
  )
}
const NoChat=()=>{
  const {authUser}=useAuthContext()
  return(
    <div className='noChat'>
        <span>welcome {authUser.name}</span>
    </div>
  )
}
export default Container
