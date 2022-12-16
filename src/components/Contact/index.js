import React, { useEffect } from 'react';
import './style.scss';
import image from '../../assets/img/photographer.jpg';
import $ from 'jquery';


const Contact = () => {

    const active = (e) => {
        if($("#contact").offset().top - $(window).scrollTop() < 450 && !$(".contact").hasClass("animate")) {
            $(".contact").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="contact" id='contact'>
            <div className="container">
            </div>
        </section>
    )
}

export default Contact;