import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
          <section className="footer-subscription">
           <p className="footer-subscription-heading">
           join the adventure newsletter to receive the best places for vacations.
           </p>   
           <p className="footer-subscription-text">
             You can unsubscribe at any time.
           </p>
           <div className="input-areas">
            <form>
              <input type="email" name="email" className="footer-input" placeholder="Your Email" />  
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form> 
           </div>
          </section>
          <div className="footer-links">
            <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About Us</h2>
                <Link to='/sign-up'>How it works</Link>
                
            </div>
            <div className="footer-link-items">
                <h2>Contact Us</h2>
                <Link to='/'>Contact</Link>
                <Link to='/'>Support</Link>
                <Link to='/'>Destinations</Link>
            </div>
            </div>
            <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>Social Media</h2>
                <Link to='/'>Insragram</Link>
                <Link to='/'>Facebook</Link>
                <Link to='/'>Twitter</Link>
                <Link to='/'>LinkedIn</Link>
            </div>
            </div>
          </div>
          <section className="social-media">
           <div className="social-media-wrap">
             <div className="footer_logo">
              <Link to='/' className='social-logo'>
              TRVLM <i class="fas fa-globe-africa" />
              </Link>  
             </div>
            <div className='social-icons'>
             <Link className="socia-icon-link facebook" 
             to='/' 
             target="_blank" 
             aria-label='Facebook'
             >
               <i className="fab fa-facebook-f"></i>
            </Link> 
            <Link className="socia-icon-link instagram" 
             to='/' 
             target="_blank" 
             aria-label='Instagram'
             >
               <i className="fab fa-instagram"></i>
            </Link>   
            <Link className="socia-icon-link twitter" 
             to='/' 
             target="_blank" 
             aria-label='Twitter'
             >
               <i className="fab fa-twitter"></i>
            </Link>  
            <Link className="socia-icon-link linkedin" 
             to='/' 
             target="_blank" 
             aria-label='LinkedIn'
             >
               <i className="fab fa-linkedin"></i>
            </Link>  
            </div>
           </div>   
          </section>
        </div>
    )
}

export default Footer;
