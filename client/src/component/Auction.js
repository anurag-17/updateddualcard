import React, { useState } from 'react';
import './Auction.css';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import otion1 from "../images/Bitcoin-icon.png"
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.jpg"
import img6 from "../images/6.jpg"
import img7 from "../images/7.jpg"
import img8 from "../images/8.jpg"

export const Auction = () => {
    const options = [
        {
          value: "BTC",
          label: (
            <div className='opttext' style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}>
              <img className='optionimg'
                style={{ height: "36px", width: "36px", marginRight: "10px" }}
                src={otion1}
                alt="loading"
              />
              BTC
            </div>
          ),
        },
    
        
      ]; 


const customStyles = {
    height: 45,
  };
  const handle=(e)=>{
    setpackages( e.value )
  }
  const [packages, setpackages] = useState("");

  return (
    <div className='body-main'>
        <div className='auction-sec'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Auction</h2>
                </div>
                <div className='row auction-row'>
                    <div className='col-md-8 col-sm-12 aut-left'>
                        <div className='aut-head'>
                            <h4>Select the card you want to auction</h4>
                        </div>
                        <div className='auction-grid'>
                                <div className='auction-img1'>
                                <img src={img1} alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                <img src={img2} alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                <img src={img3} alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                <img src={img4} alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                <img src={img5} alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                <img src={img6} alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                <img src={img7} alt="img"/>
                                </div>
                                <div className='auction-img1'>
                                <img src={img8} alt="img"/>
                                </div>                                
                        </div>

                    </div>
                    <div className='col-md-4 col-sm-12 aut-right'>
                        <div className='auction-profile'>
                        <img src={img1} alt="img"/>
                        </div>
                        <div className='auction-ct'>
                            <div className='actprize-btn1'>
                                <h5>Price</h5>
                                <Form.Group className="mb-3">
                                <Form.Control placeholder="starting price"  />
                            </Form.Group>
                            </div>
                            <div className='actprize-btn1 curreny-img'>
                                <h5>currency</h5>                              
                                  <Select
                                className="Select_pack"
                                options={options}
                                styles={customStyles}
                                    value={options.filter(function(option) {
                                    return option.value === packages;
                                    })}
                                    onChange={handle}
                  />
                            </div>
                        </div>
                        <div className='btn-duel-right'>
                              <button className='hero-btn'>Publish to Marketplace</button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auction;