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
                    <li><a href='/'>Sobre</a></li>
                    <li><a href='/'>Redes Social</a></li>
                    <li><a href='/'>Objetivo</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;