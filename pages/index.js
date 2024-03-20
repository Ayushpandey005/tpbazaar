import React, { useEffect, useState } from 'react'
import Layout from './Components/Layout'
import Home from './Components/Home'
import App from './_app'
import { Provider } from 'react-redux'
import { store } from './redux/app/store'
import Productdetails from './cartdetails'
import toast, {Toaster} from 'react-hot-toast'
// import { Auth0Provider } from '@auth0/auth0-react';


function index() {

  const pcategoryid = ''
  return (
<>

      <Layout pcategoryid={pcategoryid}>
        <Home />
      </Layout>
   
</>

  )
}

export default index