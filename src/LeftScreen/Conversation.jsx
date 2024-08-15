import './Conversation.css'

const Conversation = ({user}) => {
  return (
    <div className="conversation" >
        <div className='model'>
            <div className="profile">
              <span>{(user.fullname).charAt(0).toUpperCase()}</span>
            </div>
            <div className='name'>
                <span>{user.fullname}</span>
            </div>
        </div>
    </div>
  )
}

export default Conversation
