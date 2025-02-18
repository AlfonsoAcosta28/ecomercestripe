import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  const router = useRouter();
  const hideLayout = router.pathname === '/login'; // Oculta Navbar y Footer en /login

  return (
    <div>
      <Head>
        <title>Oops Dulceria</title>
      </Head>
      <div className='layout'>
        {!hideLayout && (
          <header>
            <Navbar />
          </header>
        )}
        <main className='main-container'>
          {children}
        </main>
        {!hideLayout && (
          <footer>
            <Footer />
          </footer>
        )}
      </div>
    </div>
  );
}

export default Layout;
