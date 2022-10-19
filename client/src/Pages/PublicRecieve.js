import React from 'react';
import '../component/DuelReceived.css';
import Carousel from 'react-bootstrap/Carousel';

 export const PublicRecieve = () => {
  return (
    <div>
        <div className='DuelRec-sec'> 
            <div className='container'>
                <div className='section-title'>
                    <h2>Duel Received</h2>
                </div>
                <div className='row duel-main'>
                    <div className='col-md-4 col-sm-12 duel-left'>
                        <div className='duel-lef-slide'>
                            <div className='duel-sldier'>

                            <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./slider-1.png"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./slider-2.png"
                            alt="Second slide"
                            />

                            <Carousel.Caption>                           
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./slider-3.png"
                            alt="Third slide"
                            />

                            <Carousel.Caption>                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                            </div>
                            <div className='duel-des'>
                              <div class="clearfix">
                                <img src="./tabicon8.png" alt="img"/>
                                <button type="button" class="btn float-end">Estebana</button>
                              </div>  
                              <div className='duel-leftgreen-text mt-3'>
                                <h4><span>5</span>won</h4>
                               </div>
                               <div className='duel-leftred-text'>
                                <h4><span>8</span>lost</h4>
                               </div>
                            </div>
                            
                        </div>
                        <div className='dule-cont'>
                            <h4>TERMS</h4>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                                 vero eos et accusam et justo duo dolores et ea rebum.</p>
                        </div>
                    </div>
                    <div className='col-md-2 duel-center'>
                    <img src="./VS icon.png" alt="img"/>
                    </div>
                    <div className='col-md-6 duel-right'>
                        <div className='row'>
                            <div className='col-md-6 col-sm-6'>
                                <div className='dule-rt-1'>
                                    <div className='dule-img1'>
                                    <img src="./NFT img1.png" alt="img"/>
                                    </div>
                                    <div className='dule-img1'>
                                    <img src="./NFT img1.png" alt="img"/>
                                    </div>
                                    <div className='dule-img1'>
                                    <img src="./NFT img2.png" alt="img"/>
                                    </div>
                                    <div className='dule-img1'>
                                    
                                    </div>                                
                                </div>
                                <div className='btn-duel-right'>
                                    <button className='hero-btn'>SELECT CARDS</button>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-6'>
                                <div className='dule-rt-2'>
                                    <div class="clearfix">
                                       <img src="./tabicon8.png" alt="img"/>
                                    <button type="button" class="btn float-end">Estebana</button>
                                 </div> 
                                </div>
                                <div className='duel-form'>
                                <div class="mb-3 mt-4">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write your terms" rows="10"></textarea>
                                    </div>
                                </div>
                                <div className='btn-duel-right'>
                                    <button className='hero-btn'>acCept challenge</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

