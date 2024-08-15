import  { createContext, useState, useContext} from  "react";

export const MessageContext=createContext();

export const MessageProvider=({children})=>{
    const [conversation,setConversation]=useState([])
    const [flag,setFlag]=useState(false)
    const [receiverId,setReceiverId]=useState(null)
    const [recevierName,setReceiverName]=useState(null)
    return (
        <MessageContext.Provider value={{conversation,setConversation,flag,setFlag,receiverId,setReceiverId,recevierName,setReceiverName}}>
            {children}
        </MessageContext.Provider>
    )
}
export const useMessageContext=()=>useContext(MessageContext)


