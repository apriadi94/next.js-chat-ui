import Head from 'next/head'

const Layout = (props) => {
    return(
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div class="container mx-auto px-20 mt-5">
                {
                    props.children
                }
            </div>
            
        </div>
    )
}

export default Layout