import React from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout