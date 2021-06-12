import Head from 'next/head'
import { AuthProvider } from '../provider/authProvider'

const Layout = (props) => {
    return(
        <AuthProvider>
             <div className='min-h-screen bg-gradient-to-b from-gray-200 to-gray-500'>
                <Head>
                    <title>{props.title}</title>
                </Head>
                <div>
                    <div className='container px-40'>
                        <div className='block md:flex gap-5'>
                            {
                                props.children
                            }
                        </div>
                    </div>
                </div>
            </div>
        </AuthProvider>
    )
}

export default Layout