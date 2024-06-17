import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Banner() {

  const BanDetails=[
    {
      title: 'From Home',
      description: 'D Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi qui deleniti suscipit minus.Nostrum rerum quis nesciunt sunt sed enim amet hic?',
      img: 'baner-img'
    },
    {
      title: 'From Office',
      description: 'Deep Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi qui deleniti suscipit minus.Nostrum rerum quis nesciunt sunt sed enim amet hic?',
      img: 'baner-img'
    },
    {
      title: 'From AnyWhere',
      description: 'Vish Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi qui deleniti suscipit minus.Nostrum rerum quis nesciunt sunt sed enim amet hic?',
      img: 'baner-img'
    }
  ]

  return (
    <>
      <Swiper
      speed={600}
       spaceBetween={30}
       centeredSlides={true}
       autoplay={{
          delay: 2500,
          disableOnInteraction: false,
       }}
        pagination={{
          clickable: true,
       }}
      //  navigation={true}
        // modules={[ Paginatioan, Navigation,]}
        modules={[Autoplay, Pagination, Navigation,]}
        className="mySwiper"
      >
       {BanDetails.map((item, ) => {
  return (
    <SwiperSlide>
      <div className="box_container">
        <div className="art_banner">
          <div className="text_contianer">
            <h1>WORK<br/><span style={{"color":"#28B463"}}> {item.title}</span> </h1>
            <p>{item.description} </p>
            <button className="btn_class">Shop Now</button>
          </div>
          <div className="img_container">
            <img src={`assets/images/${item.img}.jpg`} alt="" />
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
})}
        </Swiper>
    </>
  )
}

export default Banner
