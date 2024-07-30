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

            <p><span className='sub-title'>For Users : </span> Every day, we share 90% of our daily ad revenue with our users. It's easy: participate by finding the treasure box in our dedicated section, where you will see an image of the gift location and a button to navigate to it on Google Maps. Be the first to find it and win the day's prize! Each day offers a new opportunity to win.</p>
           
            <p><span className='sub-title'>For Advertisers : </span> Advertise your company on our website and engage users with exciting giveaways. It's more than just advertising—it's an entertaining experience for users, driving your success too.</p>
            <h3>Flexible and Growing Daily</h3>       

            <p>Start advertising with us for as little as 100 rupees. You have the freedom to set your advertisement price above the rate shown on the previous ad day, allowing you to decide how much to invest based on your budget and advertising goals. This flexible approach ensures that the platform evolves daily, with the potential for rewards growing alongside the advertisement value. Looking for a deal? If our latest ad rate seems high, don't worry—we've got discounts to fit your budget! With us, your ad cost can grow with your success, ensuring you get the best value for your investment</p>
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