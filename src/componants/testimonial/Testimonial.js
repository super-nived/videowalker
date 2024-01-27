import React from 'react'
import PIC1 from '../../asset/avatar1.jpg'
import PIC2 from '../../asset/avatar2.jpg'
import PIC3 from '../../asset/avatar3.jpg'
import PIC4 from '../../asset/avatar4.jpg'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
function Testimonial() {


  return (
    <section className='container testimonials'>
        <h2>Student's Testimonials</h2>
        <div>
           

   {
             <Swiper
             spaceBetween={50}
             slidesPerView={1}
             onSlideChange={() => console.log('slide change')}
             onSwiper={(swiper) => console.log(swiper)}
            //  breakpoints = { 600 ={
            //       slidesPerView:1
            //  }}
           >
             <SwiperSlide>
            <article className="testimonial">
                <div className="avatar">
                    <img src={PIC1} alt="" />
                </div>
                <div className="testimonial-info">
                    <h5>parker</h5>
                    <small>Students</small>
                </div>
                <div className="testimonial-body">
                    <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis distinctio tempora eum ea dolorem aspernatur suscipit molestiae illo? Sint voluptas voluptate molestiae explicabo veritatis quae. Voluptates alias modi ducimus doloribus. adipisicing elit. Ipsa dolore 
                        quae qu
                    </p>
                </div>
            </article></SwiperSlide>
             <SwiperSlide>
            <article className="testimonial">
                <div className="avatar">
                    <img src={PIC2} alt="" />
                </div>
                <div className="testimonial-info">
                    <h5>super</h5>
                    <small>Students</small>
                </div>
                <div className="testimonial-body">
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum facilis, esse dolor quia nemo nisi perferendis sunt ipsam accusantium quod qui totam. Facere repudiandae eligendi mollitia asperiores voluptatem odio. consectetur adipisicing elit. Ipsa dolore 
                        quae 
                    </p>
                </div>
            </article></SwiperSlide>
             <SwiperSlide>
            <article className="testimonial">
                <div className="avatar">
                    <img src={PIC3} alt="" />
                </div>
                <div className="testimonial-info">
                    <h5>ben</h5>
                    <small>Students</small>
                </div>
                <div className="testimonial-body">
                    <p>Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam molestiae necessitatibus quo natus nesciunt vero cumque sint, voluptatibus error at repellat. Cupiditate nostrum, numquam ducimus dolor illum nesciunt veritatis beatae? consectetur adipisicing elit. Ipsa dolore 
                        quae 
                    </p>
                </div>
            </article></SwiperSlide>
             <SwiperSlide>
            <article className="testimonial">
                <div className="avatar">
                    <img src={PIC3} alt="" />
                </div>
                <div className="testimonial-info">
                    <h5>glen markin</h5>
                    <small>Students</small>
                </div>
                <div className="testimonial-body">
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit iure eum eveniet nam sed. Vitae unde nam quo non! Perferendis exercitationem officia dolores. Ea, aspernatur corporis inventore numquam delectus facilis! consectetur adipisicing elit. Ipsa dolore 
                        quae 
                    </p>
                </div>
            </article></SwiperSlide>
             ...
           </Swiper>
   }



        </div>

    </section>
  )
}

export default Testimonial