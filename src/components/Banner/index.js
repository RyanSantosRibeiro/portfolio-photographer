import React, { useEffect } from 'react';
import './style.scss';
import $ from 'jquery';
import {screen, scale} from './../../helpers/auxiliar';

import bg from '../../assets/img/bg.jpg';
import tree from '../../assets/img/bg-tree.png';
import Snowflake from '../Snowflake';

const Banner = () => {

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
            <img className='banner__tree' src={tree} alt="" />
            <Snowflake />
            <div className='banner__text'>
                <h1>Feliz Natal</h1>
            </div>
            <div className='banner__modal'>
                <h2>Feliz Natal</h2>
            </div>
        </section>
    )
}

export default Banner;