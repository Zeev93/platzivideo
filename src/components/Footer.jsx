import React from 'react';
import { Link } from 'react-router-dom';


import '../assets/styles/components/Footer.scss'


const Footer = () => {
    return (
      <footer className="footer">
        <Link to="/">Terminos de uso</Link>
        <Link to="/">Declaración de privacidad</Link>
        <Link to="/">Centro de ayuda</Link>
      </footer>
    );
}
 
export default Footer;