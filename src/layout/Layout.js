import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {

    return (
        <>
            <nav>
                <Header />
            </nav>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout
