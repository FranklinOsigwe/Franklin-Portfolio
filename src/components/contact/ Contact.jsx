import React from 'react'
import "./contact.css"
import Phone from "../../image/phone.png"
import Address from "../../image/address.png"
import Email from  "../../image/email.png"


function  Contact() {
  return (
      <div className="c">
          <div className="c-bg"></div>
          <div className="c-wrapper">
              <div className="c-left">
                  <h1 className='c-title'>Lets discuss your project</h1>
                  <div className='c-info'>
                      <div className="c-info-item">
                          <img src={Phone} alt="" className="c-icon"  />
                          +1 2344 345 2334 2344
                      </div>

                      <div className="c-info-item">
                          <img className="c-icon" src={Email} alt="" />
                          Franko@gmail.com
                      </div>
                      <div className="c-info-item">
                          <img className="c-icon" src={Address} alt="" />
                          234 Hertfordshire street, hatfield UK.
                      </div>

                  </div>
              </div>
              <div className="c-right">
              <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
                  </p>
                  
                  <form>
                      <input type="text" placeHolder="Name" name="user_name"/>
                      <input type="text" placeHolder="Subject" name="user_subject"/>
                      <input type="text" placeHolder="Email" name="user_email" />
                      <textarea rows="5" placeholder="Message" name="message" />
                      <button>Submit</button>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default  Contact