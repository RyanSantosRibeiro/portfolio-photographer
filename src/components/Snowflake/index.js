import React, { useEffect } from 'react';
import './style.scss';
import $ from 'jquery';


import sn1 from '../../assets/img/snowflake.png';
import sn2 from '../../assets/img/snowflake-2.png';
import sn3 from '../../assets/img/snowflake-3.png';
import sn4 from '../../assets/img/snowflake-4.png';
import sn5 from '../../assets/img/snowflake-5.png';


const Snowflake = () => {

    const animate = () => {
        $( ".snowflake img" ).animate({
            opacity: 0.25,
            top: "80%",
        }, 6000, function() {
            // Animation complete.
        });
    }
    
    useEffect(() => {
        animate();
    },[]);
    return  (
        <div className="snowflake" id='snowflake'>
            <img src={sn1} alt=""/>
            <img src={sn2} alt=""/>
            <img src={sn3} alt=""/>
            <img src={sn4} alt=""/>
            <img src={sn5} alt=""/>
        </div>
    )
}

export default Snowflake;