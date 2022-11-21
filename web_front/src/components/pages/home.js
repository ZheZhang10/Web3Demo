import Footer from '../components/footer';
import NftCard from '../components/NftCard';
import ColumnNewRedux from '../components/ColumnNewRedux';
import HomeCard1 from '../components/HomeCard1';
import React, { useState } from 'react';
import { Carousel, Radio } from 'antd';

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


    return (
      <>
        <div className="Branding_Page_1">
          <div className="Ellipse-4"></div>
          <div className="radial-gradient">
            <span className="Make-Valuable-Inspirations-Value-More">
              Make Valuable Inspirations Value More
            </span>
            {/* <HomeCard1 ></HomeCard1> */}
            {/* <ColumnNewRedux></ColumnNewRedux> */}
            {/* <NftCard nft={nft} key={index} onImgLoad={onImgLoad} height={height} /> */}
            {/* <div className='card_home_1'> */}
            {/* <img src='./img/items/anim-4.webp'></img> */}
            {/* <img src='./img/home/card_home.png' ></img> */}
            {/* </div> */}
          </div>
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
export default Home;