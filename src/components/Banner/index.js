import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';
import {screen, scale} from './../../helpers/auxiliar';

import bg from '../../assets/img/background.jpg';
import arrowLeft from '../../assets/img/left-arrow.png';
import arrowRight from '../../assets/img/right-arrow.png';
// import tree from '../../assets/img/bg-tree.png';

const Banner = () => {
    const {data,setData} = useState([]);

    const animate = (e) => {
        let mouseX = e.pageX;
        let mouseY = e.pageY;

        if(mouseY > screen.height + screen.documentHeight * 0.4) { 
            return;
        }

        let originX = mouseX - screen.width * 0.3;
        let originY = mouseY - screen.height * 0.5;

        let eHeight = $(".banner").height();
        let eWidth = $(".banner").width();

        let x = (scale(originX,0,screen.width,-12,12) * -1) - eWidth / 5;
        let y = (scale(originY,0,screen.height,-12,12) * -1) - eHeight / 5;


        $(".neblina1").css({
            "left":`${x}px`,
            "bottom":`${y}px`
        });

        console.log(screen)
    }
    
    useEffect(() => {
        // $(window).on('scroll',()=>animate());
        // $("body").on('mousemove',function(e){
        //     if(screen.width > 1000) {
        //         animate(e);
        //     }
        //   });

    },[]);
    return  (
        <section className="banner" id='banner' style={{backgroundImage:`url(${bg})`}}>
            {/* <img className='banner__tree' src={tree} alt="" /> */}
            {/* <div className='banner__text'>
                <h1>Your Portfolio</h1>
            </div> */}
            <div className='banner__button'>
                <a href='#about'>Make a book</a>
            </div>
            <div className='banner__arrow'>
                <img src={arrowLeft} className='banner__arrow--left'/>
                <p>3</p>
                <img src={arrowRight} className='banner__arrow--right'/>
            </div>
        </section>
    )
}

export default Banner;