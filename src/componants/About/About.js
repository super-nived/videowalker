import React from 'react'
import {FaPython} from 'react-icons/fa'
import {DiJava} from 'react-icons/di'
import {SiFlutter} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiDotnet} from 'react-icons/si'
import {TbBrandPhp} from 'react-icons/tb'
import './About.css'
import { Link } from 'react-router-dom'


function About() {
  return (
     <section className='categories'>
        <div className="container category-container">
           <div className="category-left">
            <h1>About Us</h1>

            <h3> Revolutionizing Advertising and Rewards! </h3>
            <p>At Give Away, we're breaking new ground in the world of online advertising and rewards. Our unique platform offers a thrilling opportunity for users and advertisers alike, creating a win-win scenario for everyone involved. </p>
            
            <h3>How It Works</h3>

            <p><span className='sub-title'>For Users  :</span> Each day, we share a whopping 90% of our daily ad revenue with our users. It's simple: participate, find the secret code in our dedicated section, and be the first to say it to our roaming video walker. If you're the first, the day's prize is yours! Every day brings a new chance to win.</p>
           
            <p><span className='sub-title'>For Advertisers   : </span> Your ads don't just live online; they hit the streets! When you advertise with us, your content is not only featured on our website but also on our video walker's display panels, ensuring maximum visibility. Our platform is perfect for those looking to increase their reach in a novel and engaging way.</p>
            <h3>Flexible and Growing Daily</h3>

            <p>Start advertising with us from as little as 10 rupees. You have the freedom to set your advertisement price above the previous day's rate, allowing you to choose how much to invest based on your budget and advertising goals. This flexible approach guarantees that the platform evolves daily, with the potential for rewards growing alongside the advertisement value.</p>
            {/* <a href='https://wa.me/8129701739/?text=Your%20Message%20Here' className='btn'> Learn More</a> */}
            <Link className='btn' to='/tresuredetails'>JUST START</Link>
            </div> 
            {/* <div className="category-right">


             <article className="category">
                <span className='category-icon'><FaPython></FaPython></span>
                <h5>python</h5>
                <p>Lorem ipsum dolor sistiae asperiores.</p>
             </article>


             <article className="category">
                <span className='category-icon'><DiJava/></span>
                <h5>java</h5>
                <p>Lorem ipsum dolor sistiae asperiores incidunt delenit.</p>
             </article>

             <article className="category">
                <span className='category-icon'><SiFlutter/></span>
                <h5>flutter</h5>
                <p>Lorem ipsum dolor sistiae asperiores incidunt dele</p>
             </article>



             <article className="category">
                <span className='category-icon'><SiJavascript/></span>
                <h5>javascript</h5>
                <p>Lorem ipsum dolor sistiae asperiores incidunt</p>
             </article>


             <article className="category">
                <span className='category-icon'><SiDotnet/></span>
                <h5>.net</h5>
                <p>Lorem ipsum dolor sistiae asperiores incidunt </p>
             </article>


             <article className="category">
                <span className='category-icon'><TbBrandPhp/></span>
                <h5>php</h5>
                <p>Lorem ipsum dolorfsdf sistiae asperiores incidunt</p>
             </article>

            </div> */}
        </div>
     </section>
  )
}

export default About