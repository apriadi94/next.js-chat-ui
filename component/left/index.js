import ListConversation from "./listConversation"

const Left = () => {
    return(
        <div className="w-full md:w-1/4 shadow-sm mt-5 bg-gray-100">
            <div className='m-5'>
                <div className="grid grid-cols-2">
                    <div>
                        <img className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white" src="https://i.picsum.photos/id/3/200/300.jpg?hmac=o1-38H2y96Nm7qbRf8Aua54lF97OFQSHR41ATNErqFc"/>
                    </div>
                    <div className="flex justify-end items-center gap-6">
                        <img className='cursor-pointer	w-5 h-5' src='https://cdn.iconscout.com/icon/free/png-256/chat-2047240-1730135.png'/>
                        <img className='cursor-pointer	w-5 h-5' src='https://cdn3.iconfinder.com/data/icons/basic-user-interface-5/64/dots_dot_dot-menu_option_nav_navigation_main-512.png'/>
                    </div>
                </div>
                <div className="mt-5">
                <form class="relative">
                    <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                    <input class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Filter projects" placeholder="Filter projects" />
                </form>
                </div>
            </div>
            <div className='w-full max-h-screen mt-2 bg-white  overflow-auto'>
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
            </div>

        </div>
    )
}

export default Left