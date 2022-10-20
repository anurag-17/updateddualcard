import React from 'react';
import './buyduelcard.css';
import Form from 'react-bootstrap/Form';
import img1 from "../Edited/1.png"
import img2 from "../Edited/2.png"
import img3 from "../Edited/3.png"
import img4 from "../Edited/5.png"
import img5 from "../Edited/6.png"
// import img6 from "../images/6.jpg"


const BuyDuelCard = () => {
  return (
    <div className='body-main'>
      <div className='buyduelcard'>
        <div className='container'>
          <div className='section-title'>
              <h2>Buy DuelCards</h2>
          </div>
          <div className='row buydel-main'>
            <div className='buydue-bg'>
              <div className='buy-cont'>
                <div className='buyduel-img'>
                  <img src={img1} alt="img"/> 
                </div>
                <div className='buy-newimg'>
                  <div className='buy-new1'> <img src="./Binancelogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./WalletConnectlogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./MetaMasklogo.png" alt="img"/></div>
                </div>
                <div className='name-form'>
                <Form.Group className="">
                   <Form.Control placeholder="Name"  />
                   </Form.Group>
                </div>
                <div className='btn-duel-right'>
                   <button className='hero-btn'>BUY NOW</button>
                 </div>
              </div>
            </div>

            <div className='buydue-bg'>
              <div className='buy-cont'>
                <div className='buyduel-img'>
                  <img src={img2} alt="img"/> 
                </div>
                <div className='buy-newimg'>
                  <div className='buy-new1'> <img src="./Binancelogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./WalletConnectlogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./MetaMasklogo.png" alt="img"/></div>
                </div>
                <div className='name-form'>
                <Form.Group className="">
                   <Form.Control placeholder="Name"  />
                   </Form.Group>
                </div>
                <div className='btn-duel-right'>
                   <button className='hero-btn'>BUY NOW</button>
                 </div>
              </div>
            </div>
            <div className='buydue-bg'>
              <div className='buy-cont'>
                <div className='buyduel-img'>
                  <img src={img3} alt="img"/> 
                </div>
                <div className='buy-newimg'>
                  <div className='buy-new1'> <img src="./Binancelogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./WalletConnectlogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./MetaMasklogo.png" alt="img"/></div>
                </div>
                <div className='name-form'>
                <Form.Group className="">
                   <Form.Control placeholder="Name"  />
                   </Form.Group>
                </div>
                <div className='btn-duel-right'>
                   <button className='hero-btn'>BUY NOW</button>
                 </div>
              </div>
            </div>
            {/* <div className='buydue-bg'>
              <div className='buy-cont'>
                <div className='buyduel-img'>
                  <img src={img4} alt="img"/> 
                </div>
                <div className='buy-newimg'>
                  <div className='buy-new1'> <img src="./Binancelogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./WalletConnectlogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./MetaMasklogo.png" alt="img"/></div>
                </div>
                <div className='name-form'>
                <Form.Group className="">
                   <Form.Control placeholder="Name"  />
                   </Form.Group>
                </div>
                <div className='btn-duel-right'>
                   <button className='hero-btn'>BUY NOW</button>
                 </div>
              </div>
            </div>
            <div className='buydue-bg'>
              <div className='buy-cont'>
                <div className='buyduel-img'>
                  <img style = {{width:"68%"}} src={img5} alt="img"/> 
                </div>
                <div className='buy-newimg'>
                  <div className='buy-new1'> <img src="./Binancelogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./WalletConnectlogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./MetaMasklogo.png" alt="img"/></div>
                </div>
                <div className='name-form'>
                <Form.Group className="">
                   <Form.Control placeholder="Name"  />
                   </Form.Group>
                </div>
                <div className='btn-duel-right'>
                   <button className='hero-btn'>BUY NOW</button>
                 </div>
              </div>
            </div> */}
            {/* <div className='buydue-bg'>
              <div className='buy-cont'>
                <div className='buyduel-img'>
                  <img src={img6} alt="img"/> 
                </div>
                <div className='buy-newimg'>
                  <div className='buy-new1'> <img src="./Binancelogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./WalletConnectlogo.png" alt="img"/></div>
                  <div className='buy-new1'> <img src="./MetaMasklogo.png" alt="img"/></div>
                </div>
                <div className='name-form'>
                <Form.Group className="">
                   <Form.Control placeholder="Name"  />
                   </Form.Group>
                </div>
                <div className='btn-duel-right'>
                   <button className='hero-btn'>BUY NOW</button>
                 </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyDuelCard;