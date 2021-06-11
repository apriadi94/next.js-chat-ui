const listContact = (props) => {
    return(
        <div className="cursor-pointer hover:bg-gray-200">
            <article className="p-4 flex space-x-4">
                <img className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white" src={props.list.profileImage}/>        
                <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20 mt-1">
                    <h3 className="font-semibold text-black">
                        {props.list.name}
                    </h3>
                </div>
            </article>
            <hr className="w-full"/>
        </div>
    )
}

export default listContact