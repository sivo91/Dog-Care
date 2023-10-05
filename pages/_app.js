import '@/styles/globals.css'
import Layout from '../components/Layout'
import Script from 'next/script'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from '@/reduxFile/store';
import { Provider } from 'react-redux';
import Head from 'next/head';
import '../styles/Home.module.css'



function App({ Component, pageProps: {session, ...pageProps} }) {


  return (
    <>
       <Head>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"/>

       
      </Head>

          

          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></Script>
     
        <Provider store={store}>
          <Layout>
                <Component {...pageProps} />
          </Layout>
        </Provider>

        <ToastContainer position='top-center' limit={1} /> 
    </>
  )
}



export default App;