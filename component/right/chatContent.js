import { useEffect, useContext, useState } from "react"
import { AuthContext } from "../../provider/authProvider"

const ChatContent = () => {
    const { socket } = useContext(AuthContext)
    const [message, setMessage] = useState([])
    useEffect(() => {
       socket.on('MESSAGE_SENT', message => {
        setMessage(message)
       })
      },[])
    return(
        <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        
        {
            message.map((list, index) =>
            <div key={index} className="chat-message">
                <div className={`flex ${list.isFromSelf ? 'items-end justify-end' : 'items-start'}`}>
                    <div className={`flex flex-col space-y-2 text-xs max-w-xs mx-2  ${list.isFromSelf ? ' order-1 items-end' : 'order-2 items-start'}`}>
                        <div>
                            <span className={`px-4 py-2 rounded-lg inline-block ${list.isFromSelf ? 'rounded-br-none bg-blue-600 text-white' : 'rounded-bl-none bg-gray-300 text-gray-600'}`}>
                                {list.content}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    </div>
    )
}

export default ChatContent