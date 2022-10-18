import React from 'react';
import './Thankyou.css';
import {Link} from "react-router-dom"
const Thankyou = () => {
  return (
    <div className='body-main'>
        <div className='thank-sec'>
            <div className='container'>
                <div className='thnkct'>
                <h1>Thank you !</h1>
                    <p>Your challenge has been sent</p>
                   <div className='thankbtn'>
    <Link to = "/">
    
                    <button class="go-home hero-btn">
                        go home
                        </button>
    </Link>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Thankyou
