import { useState, useEffect, createContext } from 'react'
import socketIOClient from "socket.io-client";
const ENDPOINT ='http://localhost:8010'
const socket = socketIOClient(ENDPOINT);

export const AuthContext = createContext()

export const AuthProvider = ({Auth, children}) => {
    
    const [to, setTo] = useState({
        id: '',
        id_chat : null,
        name: '',
        profileImg: '',
    })

    useEffect(() => {
        socket.auth = { 
            token: 'berenang_renang_ketepian', 
            userId: 1, 
            username: 'Dimas Nugraha', 
            profileImage : `https://picsum.photos/id/10/200/300`};

        socket.connect();
    }, [])
    const AuthState = { socket, to, setTo }
    return(
        <AuthContext.Provider value={AuthState}>
            {children}
        </AuthContext.Provider>
    )
}