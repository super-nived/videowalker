import React from 'react'
import "./Contact.css"
import{AiOutlineMail} from 'react-icons/ai'
import{ImWhatsapp} from 'react-icons/im'
import{FiInstagram} from 'react-icons/fi'
function Contact() {
  return (
  
        <div className="container fc contact__container">
        <div className="contact__options">
          <article className='conatact__option'>
            <AiOutlineMail className='gmail'/>
            <h4>Email</h4>
            <a href="mailto:nivedchandran7@gmail.com?subject=The%20Subject&body=Hi%20Nived,">Send a message</a>

          </article>

          <article className='conatact__option'>
            <ImWhatsapp className='whats'/>
            <h4>whats up</h4>
            <a href="https://wa.me/6238117525?text=Hi%20Nived">Send a message</a>

          </article>

          <article className='conatact__option'>
            <FiInstagram className='insta'/>
            <h4>Instagram</h4>

            <a href="https://www.instagram.com/super_nived/" >send an message</a>
          </article>
        </div>
        <form action='https://formspree.io/f/xyyawkvj' method='POST'>
          <input name="name"  type="text" placeholder='full name' />
          <input name='email' type="text" placeholder='Email' />
          <textarea name="content" placeholder='text your message' required></textarea>
          <button className='btn btn-primary' >send message</button>
          <ul className='privacy'>
           <span><li><a href="">privacy</a></li></span> 
           <span><li><a href="">terms and conditions</a></li></span> 
           <span><li><a href="">refund</a></li></span> 
          </ul>
        </form>
      </div>
      


  )
}

export default Contact