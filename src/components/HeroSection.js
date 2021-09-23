import React from 'react';
import '../App.css';
import { Button } from './Button2';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/morocco.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for ?</p>
            <div className="hero-btns">
                <Button href='/places' className='read' buttonStyle='btn--outline' buttonSize='btn--large'>
                    READ MORE
                </Button>
               
            </div>
        </div>
    )
}

export default HeroSection
