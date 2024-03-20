// import '@/styles/globals.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from 'react-redux';
// import { store } from './redux/app/store';
// import Head from 'next/head';
// import {Toaster} from 'react-hot-toast'
// import { Auth0Provider } from '@auth0/auth0-react';
// import Productsalldetails from './Productsalldetails';
// import SubcatProducts from './SubcatProducts';

// export default function App({ Component, pageProps }) {
//   return (
//     <Auth0Provider
//     domain="dev-uomrcznskwzsz51v.us.auth0.com"
//     clientId="m7k3cKpmk1U3o5MsfEoXLRJvzBmP91ds"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
    
//     <Provider store={store}>
//       <Head>
//         <link
//           href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
//           rel="stylesheet"
//           integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
//           crossOrigin="anonymous"
//         />
//       </Head>
//         <script src='https://checkout.razorpay.com/v1/checkout.js'></script>
//       {/* <SubcatProducts/> */}
//       <Toaster/>

//       <Component {...pageProps} />
//     </Provider>
//     <Auth0Provider/>
//   );
// }


import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { Auth0Provider } from '@auth0/auth0-react';

export default function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-uomrcznskwzsz51v.us.auth0.com"
      clientId="m7k3cKpmk1U3o5MsfEoXLRJvzBmP91ds"
      authorizationParams={{

        redirectUri:'http://localhost:3000'
      }}
    >
      <Provider store={store}>
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossOrigin="anonymous"
          />
        </Head>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        <Toaster />
        <Component {...pageProps} />
      </Provider>
    </Auth0Provider>
  );
}

