import { useEffect, useContext } from "react"
import { AuthContext } from "../../provider/authProvider"
import ChatContent from "./chatContent"
import FormSendChat from "./formSendChat"

const Right = () => {
  const { socket, room } = useContext(AuthContext)

  useEffect(() => {
    if(room.id){
      socket.emit('REQUEST_MESSAGE', room.id)
    }
  }, [room.id])

    return(
      <div className="w-full md:w-3/4 shadow-sm mt-5 bg-gray-100">
        {
          room.id ?
          <div className="flex-1 p:2 sm:p-6 flex flex-col h-screen">
            <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
                <div className="flex items-center space-x-4">
                  <img src={room.image} alt="" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"/>
                  <div className="flex flex-col leading-tight">
                      <div className="text-2xl mt-1 flex items-center">
                        <span className="text-gray-700 mr-3">{room.name}</span>
                      </div>
                      <span className="text-lg text-gray-600">Klik for more information</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                  </button>
                </div>
            </div>

            <ChatContent/>
            <FormSendChat/>
          </div> : null
        }
      </div>
    )
}

export default Right