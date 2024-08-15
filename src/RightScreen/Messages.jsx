import './Messages.css'

const Messages = ({message}) => {
  const {id}=JSON.parse(localStorage.getItem('chat-user'))
  const timestamp=new Date(message.createdAt)
  let hour=timestamp.getHours()
  const minute=timestamp.getMinutes()
  const indicator=hour>=12?'PM':'AM';
  if(hour>12)
  {
    hour-=12;
  }
  else if(hour==0)
  {
    hour=12
  }
  const timestring=`${hour}:${minute<10?'0':''}${minute} ${indicator}`
  return (
    <div className= {id===message.senderId?'messageEnd':'messageStart'}>
      {message.message}
      <div className='time'>
        {timestring}
      </div>
    </div>
  )
}

export default Messages
