import Footer from '../components/footer';
import NftCard from '../components/NftCard';
import ColumnNewRedux from '../components/ColumnNewRedux';
import HomeCard1 from '../components/HomeCard1';
import React, { useState } from 'react';
import { Carousel, Radio } from 'antd';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Mousewheel } from 'swiper';
import Slide1 from './slide1';

// Import Swiper styles
import 'swiper/swiper.scss'
import "swiper/modules/pagination/pagination.scss";
import Slide2 from './slide2';
import Slide3 from './slide3';
// import "../../../src/assets/style.scss"

const contentStyle = {
    height: '1600px',
//     width: "100%",
//   height: "100%",
    color: '#fff',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#364d79',
  };

const Home =()=>{

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
       {/* <Swiper
            modules={[Pagination,Mousewheel]}
            direction={"vertical"}
            spaceBetween={0}
            slidesPerView={1}
            mousewheel={true}
            pagination={{type:"progressbar"}}
            // pagination={{clickable:true}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            // className="mySwiper"
            >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper> */}

        <Swiper
            modules={[Pagination,Mousewheel]}
            autoHeight={true}
            observer={true}
            // observeParents={true}
            autoplay={5000}
            direction={"vertical"}
            spaceBetween={0}
            slidesPerView={1}
            mousewheel={true}
            pagination={{type:"progressbar"}}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
            className="mySwiper"
            speed={2000}
            >
            <SwiperSlide>
                <div className='slide_1'>
                    {/* <h1>slide</h1> */}
                    <Slide1></Slide1>
                </div>
                {/* <Slide1/> */}
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide_2'>
                    <Slide2></Slide2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide_3'>
                    <Slide3></Slide3>
                </div>
            </SwiperSlide>
           
        </Swiper>



        {/* <div className="Branding_Page_1">
          <div className="Ellipse-4"></div>
          <div className="radial-gradient">
            <span className="Make-Valuable-Inspirations-Value-More">
              Make Valuable Inspirations Value More
            </span> */}
            {/* <HomeCard1 ></HomeCard1> */}
            {/* <ColumnNewRedux></ColumnNewRedux> */}
            {/* <NftCard nft={nft} key={index} onImgLoad={onImgLoad} height={height} /> */}
            {/* <div className='card_home_1'> */}
            {/* <img src='./img/items/anim-4.webp'></img> */}
            {/* <img src='./img/home/home_card_1.png' className='img_home_card_1'></img> */}
            {/* </div> */}
          {/* </div>
        </div> */}
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
export default Home;