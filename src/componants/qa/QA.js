import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import { useState } from 'react'
import './QA.css'
function Qa() { 
    
    const [state,setState] = useState(false)
    const [para,setPara] = useState('')
  return (
    <section className='qas'>
        <h2>Frequanly Asked Questions</h2>
        <div className="container qa-conatainer">
            <div className="qa">
                <div  className="faq-icon">
                    <AiOutlinePlus onClick={()=>{
                        setState(!state)
                        setPara('one')
                        }} ></AiOutlinePlus>
                    <AiOutlineMinus className='minus'></AiOutlineMinus>
                </div>
                
                <div className="question-answer">
                    <h4>How do i know the right courses for me</h4>
                    <p className={ state===true && para==='one'? 'open-p' : 'hide-p'}>The href attribute requires a valid value to be accessible. Prov
                        ide a valid, navigable address as the href value. If you cannot 
                        provide a valid href, but still need the element t</p>
                
                </div>
            </div>


            <div className="qa">
                <div  className="faq-icon">
                    <AiOutlinePlus onClick={()=>{setState(!state)}} ></AiOutlinePlus>
                    <AiOutlineMinus className='minus'></AiOutlineMinus>
                </div>
                
                <div className="question-answer">
                    <h4>How do i know the right courses for me</h4>
                    <p className={state ? 'open-p' : 'hide-p'}>The href attribute requires a valid value to be accessible. Prov
                        ide a valid, navigable address as the href value. If you cannot 
                        provide a valid href, but still need the element t</p>
                
                </div>
            </div>




            <div className="qa">
                <div  className="faq-icon">
                    <AiOutlinePlus onClick={()=>{setState(!state)}} ></AiOutlinePlus>
                    <AiOutlineMinus className='minus'></AiOutlineMinus>
                </div>
                
                <div className="question-answer">
                    <h4>How do i know the right courses for me</h4>
                    <p className={state ? 'open-p' : 'hide-p'}>The href attribute requires a valid value to be accessible. Prov
                        ide a valid, navigable address as the href value. If you cannot 
                        provide a valid href, but still need the element t</p>
                
                </div>
            </div>




            <div className="qa">
                <div  className="faq-icon">
                    <AiOutlinePlus onClick={()=>{setState(!state)}} ></AiOutlinePlus>
                    <AiOutlineMinus className='minus'></AiOutlineMinus>
                </div>
                
                <div className="question-answer">
                    <h4>How do i know the right courses for me</h4>
                    <p className={state ? 'open-p' : 'hide-p'}>The href attribute requires a valid value to be accessible. Prov
                        ide a valid, navigable address as the href value. If you cannot 
                        provide a valid href, but still need the element t</p>
                
                </div>
            </div>




            <div className="qa">
                <div  className="faq-icon">
                    <AiOutlinePlus onClick={()=>{setState(!state)}} ></AiOutlinePlus>
                    <AiOutlineMinus className='minus'></AiOutlineMinus>
                </div>
                
                <div className="question-answer">
                    <h4>How do i know the right courses for me</h4>
                    <p className={state ? 'open-p' : 'hide-p'}>The href attribute requires a valid value to be accessible. Prov
                        ide a valid, navigable address as the href value. If you cannot 
                        provide a valid href, but still need the element t</p>
                
                </div>
            </div>





            <div className="qa">
                <div  className="faq-icon">
                    <AiOutlinePlus onClick={()=>{setState(!state)}} ></AiOutlinePlus>
                    <AiOutlineMinus className='minus'></AiOutlineMinus>
                </div>
                
                <div className="question-answer">
                    <h4>How do i know the right courses for me</h4>
                    <p className={state ? 'open-p' : 'hide-p'}>The href attribute requires a valid value to be accessible. Prov
                        ide a valid, navigable address as the href value. If you cannot 
                        provide a valid href, but still need the element t</p>
                
                </div>
            </div>


        </div>
    </section>
  )
}

export default Qa