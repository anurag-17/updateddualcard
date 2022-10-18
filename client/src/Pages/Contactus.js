import React from 'react';
import './Contactus.css';

const Contactus = () => {
  return (
    <div className='body-main'>
      <div className='contact-sec'>
        <div className='container'>
          <div className='section-title'>
              <h2>Contact us</h2>        
           </div>
        </div>
        <div className='contf'>
          <div className='cont-form'>
          <form>
          <div className="row form1">
            <div className="col-md-6">
              <label for="Full Name" className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Name" name="Name"/>
            </div>

            <div className="col-md-6">
            <label for="Email" className="form-label">Email Address</label>
              <input type="text" className="form-control" placeholder="Enter email" name="Email"/>
            </div>
          </div>
          <div className="row form1 mt-4">
            <div className="col-md-12">
            <label for="Subject" className="form-label">Subject</label>
              <input type="text" className="form-control" placeholder="Subject" name="Subject"/>
            </div>
          </div>
          <div className="row form1 mt-4">           
            <div className="col-md-12">
            <label for="MESSAGE" className="form-label">Message</label>
            <textarea className="form-control" rows="5" id="comment" name="text" placeholder='Message'></textarea>
            </div>
          </div>
          <div className='cont-subt'>
           <button type="submit" className="btn hero-btn">Submit</button>
          </div>
        </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus;