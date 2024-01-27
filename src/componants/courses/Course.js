import React from 'react'
import IMG1 from '../../asset/p4.JPG'
import IMG2 from '../../asset/p2.JPG'
import IMG3 from '../../asset/3.JPG'
import './Course.css'


function Course() {
  return (
    <section className='courses'>
        <h2>Our Branches</h2>
        <div className="container courses-container">


        <article className="course">
                <div className="course-image">
                  <img src={IMG1} alt="image" />
                </div>
                <div className="course-ifo">
                <h4><a href='https://www.google.com/maps/place/CHAITHANYA+ENT+HOSPITAL/@9.9663284,76.294687,17z/data=!3m1!4b1!4m6!3m5!1s0x3b0872c9a8437471:0x868c269260230984!8m2!3d9.9663284!4d76.2968757!16s%2Fg%2F124ypl0hd?coh=164777&entry=tt'>click to location</a></h4>
                <p>near to chaithanya eye hospital adipisicing elit.
                     Porro perferendis velit ipsam a sequi animi
       
                </p>
                <a href='https://wa.me/8129701739/?text=Your%20Message%20Here' className='btn btn-primary'>Learn More</a>
                </div>
            </article>



            <article className="course">
                <div className="course-image">
                  <img src={IMG2} alt="image" />
                </div>
                <div className="course-ifo">
                <h4><a href="https://goo.gl/maps/UQkSqm6cwz6pDwwn7">click to location</a></h4>
                <p>near to kadavanthara metrostation adipisicing elit.
                     Porro perferendis velit ipsam a sequi animi
                
                </p>
                <a href='https://wa.me/8129701739/?text=Your%20Message%20Here' className='btn btn-primary'>Learn More</a>
                </div>
            </article>


            <article className="course">
                <div className="course-image">
                  <img src={IMG3} alt="image" />
                </div>
                <div className="course-ifo">
                <h4><a href='https://goo.gl/maps/UQkSqm6cwz6pDwwn7'>click to location</a></h4>
                <p>near to manorama junction adipisicing elit.
                     Porro perferendis velit ipsam a sequi animi
                
                </p>
                <a href='https://wa.me/8129701739/?text=Your%20Message%20Here' className='btn btn-primary'>Learn More</a>
                </div>
            </article>


        </div>

    </section>
  )
}

export default Course