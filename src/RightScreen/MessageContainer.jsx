import './MessageContainer.css'
import Messages from './Messages.jsx'
import Text from './Text'
import Header from './Header' 
import {useMessageContext} from '../Context/MessageContext'

const MessageContaier = () => {
  const {conversation}=useMessageContext()
  const todayDate=new Date().toDateString()
  const yesterDay=  new Date(new Date())
  yesterDay.setDate(new Date().getDate()-1)
  const groupMessageByDate=()=>{
      const groupedMessage={};
      conversation.forEach(message => {
      const date=new Date(message.createdAt).toDateString()
      if(!groupedMessage[date])
      {
        groupedMessage[date]=[]
      }
      groupedMessage[date].push(message)
    });
    return groupedMessage
  }
  return (
    <div>
       <div className='header1'>
        <Header/>
      </div>
      <div className='messageContainer'>
        <div className='text1'>
          <Text/>
        </div>
        <div className='messages1'>
        {Object.entries(groupMessageByDate()).map(([date,messages])=>(
          <div key={date}>
            <span>{todayDate===date?'Today':yesterDay.toDateString()===date?'Yesterday':date}</span>
            {messages.map((message,index)=>(
              <Messages key={index} message={message}/>
            ))}
          </div>
        ))}
          
        </div>
      </div>
    </div>
  )
}


export default MessageContaier
