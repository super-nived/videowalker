import React from 'react'
import './Advertiser.css'
import {FiInstagram} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

function Team() {
  return (
    <div>
          {/* <section className='about-achievements'>
      <div className='container about-achievements-container'>
        <div className="about-right">
         <h1>advertisers</h1>
         <p>
         Welcome! All our advertisers are listed at the bottom based on the advertised amount
         </p>
         <div className="achievements-cards">
            <article className='achievement-card'>
              <span className='archievement-icon'><img src={PIC}></img></span>
              <h3> $ 450</h3>
              <p>Industry apps private limited kakkanad </p>
            </article>

            <article className='achievement-card'>
              <span className='archievement-icon'><ImManWoman/></span>
              <h3> $ 345</h3>
              <p>Industry apps private limited kakkanad </p>
            </article>

            <article className='achievement-card'>
              <span className='archievement-icon'><AiOutlineTrophy/></span>
              <h3> #340</h3>
              <p>Awards</p>
            </article>
            <article className='achievement-card'>
              <span className='archievement-icon'><RiBuildingFill/></span>
              <h3>14+</h3>
              <p>Building</p>
            </article>
         </div>
        </div>
        </div>
    </section> */}
    {/* <section className='team'>
        <h2>Meet Our Team</h2>
        <div className="container team-container">
            <article className='team-member'>
                <div className="team-memeber-image">
                    <img src="https://agora.resposta.net/wp-content/uploads/2020/08/77583371.cms.jpeg" alt="" />
                </div>
                <div className="team-member-info">
                    <h4>elon musk</h4>
                    <p>Expert Tutor</p>
                </div>
                <div className='team-member-socials'>
                    <a href='https://instagram.com'><AiOutlineMail/></a>
                    <a href='https://instagram.com'><FiInstagram/></a>
                    <a href='https://instagram.com'><BsWhatsapp/></a>
                </div>
            </article>

            <article className='team-member'>
                <div className="team-memeber-image">
                    <img src="https://cdn.vox-cdn.com/thumbor/qd-k76cRXE9NUv0NYB0IOcpYeUo=/0x0:2332x1961/1200x800/filters:focal(1104x869:1476x1241)/cdn.vox-cdn.com/uploads/chorus_image/image/55870597/Sundar_Pichai.0.jpg" alt="" />
                </div>
                <div className="team-member-info">
                    <h4>sundar pichai</h4>
                    <p>Expert Tutor</p>
                </div>
                <div className='team-member-socials'>
                    <a href='https://instagram.com'><AiOutlineMail/></a>
                    <a href='https://instagram.com'><FiInstagram/></a>
                    <a href='https://instagram.com'><BsWhatsapp/></a>
                </div>
            </article>
            <article className='team-member'>
                <div className="team-memeber-image">
                    <img src="https://tbivision.com/files/2020/10/Bill-Gates-headshot.jpg" alt="" />
                </div>
                <div className="team-member-info">
                    <h4>bill gates</h4>
                    <p>Expert Tutor</p>
                </div>
                <div className='team-member-socials'>
                    <a href='https://instagram.com'><AiOutlineMail/></a>
                    <a href='https://instagram.com'><FiInstagram/></a>
                    <a href='https://instagram.com'><BsWhatsapp/></a>
                </div>
            </article>

            
            <article className='team-member'>
                <div className="team-memeber-image">
                    <img src="https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/429083" alt="" />
                </div>
                <div className="team-member-info">
                    <h4>mark zuckerberg</h4>
                    <p>Expert Tutor</p>
                </div>
                <div className='team-member-socials'>
                    <a href='https://instagram.com'><AiOutlineMail/></a>
                    <a href='https://instagram.com'><FiInstagram/></a>
                    <a href='https://instagram.com'><BsWhatsapp/></a>
                </div>
            </article>
            

            <article className='team-member'>
                <div className="team-memeber-image">
                    <img src="https://www.thefamouspeople.com/profiles/images/guido-van-rossum-1.jpg" alt="" />
                </div>
                <div className="team-member-info">
                    <h4>guido van rossum</h4>
                    <p>Expert Tutor</p>
                </div>
                <div className='team-member-socials'>
                    <a href='https://instagram.com'><AiOutlineMail/></a>
                    <a href='https://instagram.com'><FiInstagram/></a>
                    <a href='https://instagram.com'><BsWhatsapp/></a>
                </div>
            </article>


            <article className='team-member'>
                <div className="team-memeber-image">
                    <img src="https://www.rollingstone.com/wp-content/uploads/2019/02/jeff-bezos-vs-ami-pecker.jpg?crop=900:600&width=440" alt="" />
                </div>
                <div className="team-member-info">
                    <h4>jeff bezos</h4>
                    <p>Expert Tutor</p>
                </div>
                <div className='team-member-socials'>
                    <a href='https://instagram.com'><AiOutlineMail/></a>
                    <a href='https://instagram.com'><FiInstagram/></a>
                    <a href='https://instagram.com'><BsWhatsapp/></a>
                </div>
            </article>


            <article className='team-member'>
                <div className="team-memeber-image">
                    <img src="https://image.cnbcfm.com/api/v1/image/104864179-20150331-0014-1180.jpg?v=1525456366" alt="" />
                </div>
                <div className="team-member-info">
                    <h4>warren buffett</h4>
                    <p>Expert Tutor</p>
                </div>
                <div className='team-member-socials'>
                    <a href='https://instagram.com'><AiOutlineMail/></a>
                    <a href='https://instagram.com'><FiInstagram/></a>
                    <a href='https://instagram.com'><BsWhatsapp/></a>
                </div>
            </article>

            <article className='team-member'>
                <div className="team-memeber-image">
                    <img src="https://th.bing.com/th/id/OIP.Jf4HiJyGPW0SG3u9LHIiXQHaFB?w=300&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                </div>
                <div className="team-member-info">
                    <h4>jack dorsey</h4>
                    <p>Expert Tutor</p>
                </div>
                <div className='team-member-socials'>
                    <a href='https://instagram.com'><AiOutlineMail/></a>
                    <a href='https://instagram.com'><FiInstagram/></a>
                    <a href='https://instagram.com'><BsWhatsapp/></a>
                </div>
            </article>
        </div>
    </section> */}
    </div>
  )
}

export default Team