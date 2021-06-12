import { useState, useEffect, useContext } from "react"
import axios from 'axios'
import Dropdown from './dropdown'
import ListConversation from "./listConversation"
import ListContactComponent from "./listContact"
import { AuthContext } from "../../provider/authProvider"

const Left = () => {
    const [addConversation, setAddConversation] = useState(false)
    const [listContact, setListContact] = useState([])
    const { socket } = useContext(AuthContext)

    const getContact = () => {
        axios({
            method: 'get',
            url : 'http://localhost:3000/api/contact',
            headers : {
                Accept : 'aplication/json'
            }
        }).then(res => {
            setListContact(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getContact()
        socket.emit('REQUEST_CONVERSATION')
        socket.on('CONVERSATION_SENT', data => {
            console.log(data)
        })
    }, [])

    return(
        <div className="w-full md:w-1/3 shadow-sm mt-5 bg-gray-100">
              <div className="flex-1 flex flex-col h-screen">
              <div className='m-5'>
                <div className="grid grid-cols-2">
                    <div>
                        <img className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white" src="https://i.picsum.photos/id/3/200/300.jpg?hmac=o1-38H2y96Nm7qbRf8Aua54lF97OFQSHR41ATNErqFc"/>
                    </div>
                    <div className="flex justify-end items-center gap-6">
                        <img onClick={() => setAddConversation(!addConversation)} className='cursor-pointer	w-5 h-5' src='https://cdn.iconscout.com/icon/free/png-256/chat-2047240-1730135.png'/>
                        <Dropdown/>
                    </div>
                </div>
                <div className="mt-5">
                <form className="relative">
                    <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                    <input className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Filter projects" placeholder="Filter projects" />
                </form>
                </div>
            </div>
            <div className='w-full max-h-screen mt-2 bg-white overflow-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch'>
                {
                    !addConversation ?
                    <div>
                        <ListConversation/>
                        <ListConversation/>
                        <ListConversation/>
                        <ListConversation/>
                        <ListConversation/>
                        <ListConversation/>
                        <ListConversation/>
                        <ListConversation/>
                        <ListConversation/>
                        <ListConversation/>
                        <ListConversation/>
                        <ListConversation/>
                        
                    </div> : 
                    <div>
                        {
                            listContact.map((list, index) => 
                                <ListContactComponent list={list}/>
                            )
                        }
                    </div>
                }
            </div>
              </div>
        </div>
    )
}

export default Left