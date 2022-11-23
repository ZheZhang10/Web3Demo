
import React, { useState } from 'react';


// Import Swiper styles
import 'swiper/swiper.scss'



const Slide2 =()=>{

 
    return (
      <>
        <div className="page2">
            <div className='radial-gradient'>
                <div className='page2_left_img'>
                    <img src='./img/home/slide2_left.png'></img>
                </div>
                <div className='page2_right_text'>
                    <span class="Get-to-Know-About-us">Get to Know About us</span>
                    <span class="What-is-Tada">
                     What is Tada?
                    </span>
                    <span className='What-is-Tada-answer'>
                    TaDa is an interactive network that combines content creation, reading, watching and trading.
                    We provide AI tools to shorten the distance between imagination and expression; we provide a platform to shorten the distance between creators and audience.
                    </span>
                </div>

            </div>
        </div>       
            
      </>
    );
};
export default Slide2;