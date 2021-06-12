const ListConversation = (props) => {
    return(
        <div className="cursor-pointer hover:bg-gray-200">
            <article className="p-4 flex space-x-4">
                <img className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white" src={props.list.room.image}/>        
                <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                    <h3 className="font-semibold text-black">
                        {props.list.room.name}
                    </h3>
                    <dl className="flex flex-wrap whitespace-pre">
                        <div className="flex-none w-full font-normal text-sm overflow-hidden truncate">
                            <dd className="inline text-black">{props.list.lastMessage}</dd>
                        </div>
                        <div className=" text-xs text-gray-500 absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
                            <dd>{props.list.time}</dd>
                        </div>
                        {
                            props.list.unRead > 0 ?
                            <div className=" text-xs text-white absolute bottom-0 right-0 rounded-full bg-red-400 text-amber-900 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
                                <dd>{props.list.unRead}</dd>
                            </div> : null
                        }
                        
                    </dl>
                </div>
            </article>
            <hr className="w-full"/>
        </div>
    )
}

export default ListConversation