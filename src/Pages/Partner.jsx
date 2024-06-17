import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Partner() {
const imgName = ["blinkit","amazon","Flipkart","zomato","shadi"]

  return (
    <>
      <div className="main_pricing">
        <div className="benifit_container">
          <span>JOBS BENEFITS</span>
        </div>
      </div>

      <div className="container py-5">
        <Swiper
          //   navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          slidesPerView={3}
          speed={600}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >

          {imgName.map((name)=>(
            <SwiperSlide>
            <div className="eg_our_client">
              <div className="all_images">
                <img src={`assets/images/${name}.png`} alt="" />
              </div>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Partner;
