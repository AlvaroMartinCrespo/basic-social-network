import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
        <ToastContainer />
      </SessionProvider>
    </>
  );
}
