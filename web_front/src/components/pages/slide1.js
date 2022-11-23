
import React, { useState } from 'react';


// Import Swiper styles
import 'swiper/swiper.scss'

const contentStyle = {
    height: '1600px',
//     width: "100%",
//   height: "100%",
    color: '#fff',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#364d79',
  };

const Slide1 =()=>{

    // const swiper = new Swiper('.swiper-container', {
    //     direction: 'vertical',
    //     sliderPerView: 1,
    //     spaceBetween: 0,
    //     mousewheel: true,
    //     pagination: {
    //         el:'.swiper-pagination',
    //         type: 'progressbar',
    //     }
    // })
    return (
      <>
        <div className="Branding_Page_1">
          {/* <div className="Ellipse-4"></div> */}
          <div className="radial-gradient ">
            <div className="Make-Valuable-Inspirations-Value-More">
                <span >
                Make Valuable Inspirations Value More
                </span>
            </div>
               
            <div className='card_home_1'>
                <img src='./img/home/home_card_1.png' ></img>
                {/* <img src='./img/home/home_card_1.png' ></img>
                <img src='./img/home/home_card_1.png' ></img> */}
            </div>
            
            {/* <HomeCard1 ></HomeCard1> */}
            {/* <ColumnNewRedux></ColumnNewRedux> */}
            {/* <NftCard nft={nft} key={index} onImgLoad={onImgLoad} height={height} /> */}
            
          </div>
          {/* <div className='card_home_1'> */}
            {/* <img src='./img/items/anim-4.webp'></img> */}
                {/* <img src='./img/home/home_card_1.png' ></img> */}
            {/* </div> */}
        </div>
        {/* <Radio.Group
                onChange={handlePositionChange}
                value={dotPosition}
                style={{
                marginBottom: 8,
                }}
            >
                <Radio.Button value="top">Top</Radio.Button>
                <Radio.Button value="bottom">Bottom</Radio.Button>
                <Radio.Button value="left">Left</Radio.Button>
                <Radio.Button value="right">Right</Radio.Button>
            </Radio.Group> */}
        {/* <Carousel dotPosition="left">
            <div>
                <div>
                    <h3>asdjkak</h3>
                </div>
             
            </div>
            <div >
                <div>
                    <h3>sfasdf</h3>
                </div>
                
            </div>
            <div>
                <div>
                    <h3>asdaw</h3>
                </div>

            </div>
           
        </Carousel> */}
      </>
    );
};
export default Slide1;