// components/Layout.js

import React from 'react';
import Header from './header';
import Footer from './footer';
import Productdetails from '../cartdetails';
import { Auth0Provider } from '@auth0/auth0-react';

const Layout = ({ children, pcategoryid }) => {
  return (
    <Auth0Provider
    domain="dev-uomrcznskwzsz51v.us.auth0.com"
    clientId="m7k3cKpmk1U3o5MsfEoXLRJvzBmP91ds"
    redirectUri={typeof window !== 'undefined' && window.location.origin}
  >
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header pcategoryid={pcategoryid} />
      <main style={{ flex: '1' }}>{children}</main>
      
      <Footer />
    </div>
    </Auth0Provider>
  );
};

export default Layout;
