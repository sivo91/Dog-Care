/* eslint-disable @next/next/no-script-component-in-head */
import '../styles/globals.css'
import Head from 'next/head';
import React from 'react';
import Script from 'next/script'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function MyApp({ Component, pageProps }) {

  return (
       <>


       <Head>

     
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"/>
        

        <link rel="shortcut icon" href="/logo.png" />

   
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></Script>
          

       </Head>
       
            <Component {...pageProps} />
            <ToastContainer position='top-center' limit={1} /> 

       </>
  )
}

export default MyApp