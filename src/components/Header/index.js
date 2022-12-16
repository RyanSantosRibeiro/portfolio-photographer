import React, { useEffect } from 'react';
import './style.scss';

import $ from 'jquery';


const Header = () => {

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 100) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    }
    
    useEffect(() => {
        window.onscroll = () => handleScroll()
    },[]);
    

    return  (
        <div className="header" id='header'>
            <div className='container'>
                <div className='header__logo'>
                    <a href='/'>Brand Logo</a>
                </div>

                <ul className='header__menu'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#wedding'>Wedding</a></li>
                    <li><a href='#birthday'>Birthday</a></li>
                    <li className='highlight'><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;