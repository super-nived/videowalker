import React from 'react'
import "./Games.css"
function Games() {
  return (
    <div className='container'>
    <div className='game'>
       <div className='left'>
        <div className="winner">
            <h3>last game winner</h3>
            <img src="https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png" alt="" />
             <p>Cristiano Ronaldo </p>
        </div>
        <div className='para'><h2>SOFTEN GAME CENTER</h2></div>
        
       </div>
       <div className="right">
        <div className='question'>
       <p> ? Find the domain name using an IP address</p>
        <p>For this Python challenge, you’ll want to import the Python socket library. That’s the only hint. Write a function that accepts an IP address, makes a DNS request, and returns the domain name that maps to that IP address using PTR DNS records.</p>
        </div>
        <div>
        <form className='form'>
          <input name="name"  type="text" placeholder='full name' />
          <input name='email' type="text" placeholder='Email' />
          <textarea name="content" placeholder='text your message' required></textarea>
          <button className='btn btn-primary' >send message</button>
        </form>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Games