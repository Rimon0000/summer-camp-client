import React from 'react';
import logo from "../../../assets/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
          <Link to='/' className='mr-3'>
            <img className='w-15 h-14 rounded-lg mb-1' src={logo} alt='' />
          </Link>
        <p>Real Champions Ltd.<br/>Providing reliable sports courses since 2014</p>
      </aside> 
      <nav>
        <header className="footer-title">Services</header> 
        <a className="link link-hover">Sports</a> 
        <a className="link link-hover">Training</a> 
        <a className="link link-hover">Leadership</a> 
        <a className="link link-hover">Self Investment</a>
      </nav> 
      <nav>
        <header className="footer-title">Company</header> 
        <a className="link link-hover">Classes</a> 
        <a className="link link-hover">Instructors</a> 
        <a className="link link-hover">Upcoming Classes</a> 
        <a className="link link-hover">Facilities</a>
      </nav> 
      <nav>
        <header className="footer-title">Legal</header> 
        <a className="link link-hover">Terms of use</a> 
        <a className="link link-hover">Privacy policy</a> 
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
    );
};

export default Footer;