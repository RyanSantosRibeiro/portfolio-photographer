import React, { useEffect, useState } from 'react';
import './style.scss';

import bg from '../../assets/img/background.jpg';
import bg2 from '../../assets/img/paisagem-2.jpg';
import arrowLeft from '../../assets/img/left-arrow.png';
import arrowRight from '../../assets/img/right-arrow.png';

const Banner = () => {
    const [active,setActive] = useState(0);
    const [background,setBackground] = useState([
        bg,
        bg2
    ]);


    function prevBanner(){
        if(active === 0) return;

        setActive(active - 1);
    }

    function nextBanner(){
        console.log(background)
        if(active + 1 >= background.length) return;

        setActive(active + 1);
    }
    
    useEffect(() => {

    },[]);
    return  (
        <section className="banner active1" id='banner'>
            <img alt='' className='banner__image' src={background[active]} />
            <div className='banner__button'>
                <a href='#about'>
                    <span>
                        Make a book
                    </span> 
                </a>
            </div>
            <div className='banner__arrow'>
                <img onClick={prevBanner} src={arrowLeft} className='banner__arrow--left' alt='' />
                <p>{active + 1}</p>
                <img onClick={nextBanner} src={arrowRight} className='banner__arrow--right' alt='' />
            </div>
        </section>
    )
}

export default Banner;