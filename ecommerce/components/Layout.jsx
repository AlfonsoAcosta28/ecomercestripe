import React from 'react'

import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
// import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <div>
      <div className='layout'>

        <Head>
          <title>Oops Dulceria</title>
        </Head>

        <header>
          <Navbar>

          </Navbar>
        </header>
        <main className='main-container'>
          {children}
        </main>
      </div>
      <footer>
        <Footer>

        </Footer>
      </footer>
    </div>
  )
}

export default Layout
