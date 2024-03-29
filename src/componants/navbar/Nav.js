import React from 'react';
import './Nav.css'
import{AiOutlineMenu} from 'react-icons/ai'
import{AiOutlineClose} from 'react-icons/ai'
import { TbBulbFilled } from "react-icons/tb";
import { Link} from 'react-router-dom';
import ME  from '../../asset/boy.png'
import { useState } from 'react';
import { useClicked } from '../../context/Context';

function Nav () {
  const [state,setState] =useState(false)
  const { clicked, setClicked } = useClicked(); // Destructure to use clicked and setClicked

  const handleClick = () => {
    setClicked(true); // Update the clicked state globally
  };

  return (
    <nav>
       <div className="container nav-container">
        <div className='logo'><Link to={'/'}><h4>video walker</h4></Link></div>
        
        <Link to ='/game'> <button className={`game-button ${clicked ? 'no-bounce' : ''}`} onClick={handleClick}><TbBulbFilled /></button></Link>
        <ul className={state ? `nav-menu ${'show'}` : 'nav-menu'}>
            <li><a ><Link to = '/'>HOME</Link></a></li>
            <li><a><Link to='/about'>ABOUT</Link></a></li>
            <li><a><Link to='/advertisers'>ADVERTICERS</Link></a></li>
            <li><a><Link to='/contact'>CONTACT</Link></a></li>
        </ul>
        <button onClick={()=>setState(!state)} className="open-button">{state ? <AiOutlineClose/>: <AiOutlineMenu/>}</button>

        
       </div>
    </nav>
  );
}

export default Nav;
