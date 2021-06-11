const ListConversation = () => {
    return(
        <div className="cursor-pointer hover:bg-gray-200">
            <article className="p-4 flex space-x-4">
                <img className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white" src="https://i.picsum.photos/id/3/200/300.jpg?hmac=o1-38H2y96Nm7qbRf8Aua54lF97OFQSHR41ATNErqFc"/>        
                <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                    <h3 className="font-semibold text-black">
                        Istriku
                    </h3>
                    <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
                        <div className="flex-none w-full font-normal">
                            <dd className="inline text-black">Sayang.... ilaklun</dd>
                        </div>
                        <div class="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
                            <dd>15:30</dd>
                        </div>
                    </dl>
                </div>
            </article>
            <hr className="w-full"/>
        </div>
    )
}

export default ListConversation