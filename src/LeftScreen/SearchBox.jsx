import { useState } from "react";
import './SearchBox.css'
import SearchIcon from '@mui/icons-material/Search';


const SearchBox = () => {
  const [search,setSearch]=useState('')
  return (
    <div className="searchBox">
        <h2>Chats</h2>
        <div>
            <input value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <SearchIcon/>
        </div>
    </div>
  )
}

export default SearchBox
