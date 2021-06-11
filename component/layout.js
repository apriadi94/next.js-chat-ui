import Head from 'next/head'

const Layout = (props) => {
    return(
        <div className='min-h-screen bg-gradient-to-b from-gray-200 to-gray-500'>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div>
                <div className='container px-10'>
                    <div className='block md:flex gap-5'>
                        {
                            props.children
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout