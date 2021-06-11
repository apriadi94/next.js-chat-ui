import Head from 'next/head'

const Layout = (props) => {
    return(
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div className='container px-10 mt-10'>
                <div className='block md:flex gap-5'>
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    )
}

export default Layout