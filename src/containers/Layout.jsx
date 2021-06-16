import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

// styles
import '../assets/styles/App.scss'

const Layout = ({children}) => {
    return ( 
        <div className="App">
            <Header/>
                {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;