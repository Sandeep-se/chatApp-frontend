import './Header.css'
import { useMessageContext } from '../Context/MessageContext'
const Header = () => {
  const {recevierName}=useMessageContext()
  return (
    <div className='header'>
      <span className='style'>{recevierName}</span>
    </div>
  )
}

export default Header
