import Home from "./Home"
import {Navigate, Route,Routes} from 'react-router-dom'
import Login from "./Login"
import SignUp from "./SignUp"
import { useAuthContext } from "./Context/AuthContext"
import {Toaster} from 'react-hot-toast'

function App() {
  const {authUser}=useAuthContext()
  
  return (
    <div>
      <Routes>
        <Route path="/" element={authUser?<Home/>:<Navigate to='/login' replace/>}/>
        <Route path="/login" element={authUser?<Navigate to='/' replace/>:<Login/>}/>
        <Route path="/signUp" element={authUser?<Navigate to='/' replace/>:<SignUp/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
