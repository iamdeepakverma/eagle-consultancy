import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Testimonal() {
  return (
  <>
        <Swiper
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
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        // slidesPerView={3}
        speed={600}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500, // autoplay interval (5 seconds)
            disableOnInteraction: false, // autoplay will not be disabled after user interaction
      }}    
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation,]}
        className="mySwiper"
      >
        <SwiperSlide> <div className="index_testimonial">
        <div className="container">
    <div className="testimonial">
        <div className='inner_img'>
        <img src="assets/images/man-test.png" alt="Profile Picture"/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.</p>
        <h3>Sean Farmer</h3>
    <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
    </div>
  </div>
</div>
</div></SwiperSlide>
        <SwiperSlide> <div className="index_testimonial">
        <div className="container">
    <div className="testimonial">
        <div className='inner_img'>
        <img src="assets/images/man-test.png" alt="Profile Picture"/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.</p>
        <h3>Sean Farmer</h3>
    <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
    </div>
  </div>
</div>
</div></SwiperSlide>
        <SwiperSlide> <div className="index_testimonial">
        <div className="container">
    <div className="testimonial">
        <div className='inner_img'>
        <img src="assets/images/man-test.png" alt="Profile Picture"/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.</p>
        <h3>Sean Farmer</h3>
    <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
    </div>
  </div>
</div>
</div></SwiperSlide>
        <SwiperSlide> <div className="index_testimonial">
        <div className="container">
    <div className="testimonial">
        <div className='inner_img'>
        <img src="assets/images/man-test.png" alt="Profile Picture"/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.</p>
        <h3>Sean Farmer</h3>
    <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
    </div>
  </div>
</div>
</div></SwiperSlide>
        <SwiperSlide> <div className="index_testimonial">
        <div className="container">
    <div className="testimonial">
        <div className='inner_img'>
        <img src="assets/images/man-test.png" alt="Profile Picture"/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.</p>
        <h3>Sean Farmer</h3>
    <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
    </div>
  </div>
</div>
</div></SwiperSlide>
        <SwiperSlide> <div className="index_testimonial">
        <div className="container">
    <div className="testimonial">
        <div className='inner_img'>
        <img src="assets/images/man-test.png" alt="Profile Picture"/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.</p>
        <h3>Sean Farmer</h3>
    <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
    </div>
  </div>
</div>
</div></SwiperSlide>
        <SwiperSlide> <div className="index_testimonial">
        <div className="container">
    <div className="testimonial">
        <div className='inner_img'>
        <img src="assets/images/man-test.png" alt="Profile Picture"/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.</p>
        <h3>Sean Farmer</h3>
    <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
    </div>
  </div>
</div>
</div></SwiperSlide>
      </Swiper>
  </>
  )
}

export default Testimonal
