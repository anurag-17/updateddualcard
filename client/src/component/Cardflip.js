import React from 'react'
import './Cardflip.css'
import buyimg1 from "../Edited/1.png";
import buyimg2 from "../Edited/6.png";
import buyimg3 from "../Edited/3.png";
// import buyimg4 from "../Edited/4.png";
import buyimg5 from "../Edited/5.png";
import buyimg7 from "../Edited/2.png"
import buyimg6 from "../images/fifth-right.svg";
import shapeline from "../images/shpeline.png";

const Cardflip = () => {
  return (
    <div>
        <div className='card-flip' id="card-flip">
        <div className='container'>
             <div className='row'>
            <div className='challengesys-grid'>
              <div className='chall-sys1'>
                <div className='row system-main'>
                  <div className='col-md-4'>
                   <div className='shape1'>
                     <img style = {{width:"98%",maxWidth:"98%",position:"relative",right:"8px"}} src={buyimg1}></img>
                     <h4>LVL 1 DUELCARD</h4>
                   </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='systemct'>
                      <img src={shapeline}></img>
                    </div>  
                  </div>
                  <div className='col-md-4'>
                  <div className='shape2'>
                    <img style={{maxWidth:"68%"}} src={buyimg2}></img>
                    <h4>LVL 1 DUELCARD</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='chall-sys1'>
                <div className='row system-main'>
                  <div className='col-md-4'>
                    <div className='shap-line'>                      
                        <div id="wrapper"> 
                        <div id="squareID" className="one">
                            <div className='shape1 twoflip'>
                                <img style = {{width:"440px",position:"relative",left:"22%"}} className="one" src={buyimg2}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>
                        </div>                        
                        <div id="squareID" className="two">
                            <div className='shape1 twoflip'>
                                <img  className="two" src={buyimg1}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>
                        </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                     <div className='systemct'>
                      <img src={shapeline}></img>
                    </div>  
                  </div>
                  <div className='col-md-4'>
                  <div className='shape2'>
                    <img style={{maxWidth:"98%"}} src={buyimg7}></img>
                    <h4>LVL 1 DUELCARD</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='chall-sys1'>
                <div className='row system-main'>
                  <div className='col-md-4'>
                  <div className='shap-line'>
                  <div id="wrapper"> 
                        <div id="squareID" className="one">
                            <div className='shape1 twoflip'>
                                <img className="one" src={buyimg7}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>
                        </div>                        
                        <div id="squareID" className="two">
                            <div className='shape1 twoflip'>
                                <img className="two" src={buyimg7}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>                        
                        <div id="squareID" className="three">
                        <div className='shape1 twoflip'>
                                <img style = {{width:"590px",marginTop:"4px"}} className="three" src={buyimg1}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>
                        </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='systemct'>
                      <img src={shapeline}></img>
                    </div>  
                  </div>
                  <div className='col-md-4'>
                  <div style = {{width:"335px"}} className='shape2'>
                    <img style={{position:"relative",left:"13px"}} src={buyimg3}></img>
                    <h4>LVL 1 DUELCARD</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='chall-sys1'>
                <div className='row system-main'>
                  <div className='col-md-4'>
                  <div className='shap-line'>
                  <div id="wrapper"> 
                        <div id="squareID" className="one">
                            <div className='shape1'>
                                <img style={{width:"300px",position:"relative",left:"25px"}} className="one" src={buyimg3}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>
                        </div>                        
                        <div id="squareID" className="two">
                            <div  className='shape1'>
                                <img style={{width:"300px",position:"relative",left:"25px",top:"7px"}} className="two" src={buyimg3}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>                        
                        <div id="squareID" className="three">
                        <div   className='shape1 twoflip'>
                                <img style={{width:"87%",position:"relative",bottom:"2px",left:"16px"}} className="three" src={buyimg1}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>
                        </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='systemct'>
                        <img  src={shapeline}></img>
                      </div>  
                  </div>
                  <div className='col-md-4'>
                  <div style = {{width:"360px"}}className='shape2'>
                    <img style = {{position:"relative",bottom:"10px",right:"30px"}} src={buyimg5}></img>
                    <h4>LVL 1 DUELCARD</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='chall-sys1'>
                <div className='row system-main'>
                  <div className='col-md-4'>
                  <div className='shap-line'>
                  <div id="wrapper"> 
                        <div id="squareID" className="one">
                            <div className='shape1'>
                                <img style={{width:"350px",position:"relative",right:"12px",bottom:"50px"}} className="one" src={buyimg5}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>
                        </div>                        
                        <div id="squareID" className="two">
                            <div className='shape1'>
                                <img  style={{width:"350px",position:"relative",right:"12px",bottom:"50px"}}  className="two lastwidth" src={buyimg5}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>                        
                        <div id="squareID" className="three">
                        <div className='shape1 twoflip'>
                                <img  style = {{position:"relative",right:"12px",bottom:"50px"}} className="three lastwidth" src={buyimg1}></img>
                                <h4>LVL 1 DUELCARD</h4>
                            </div>  
                        </div>
                        </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='systemct'>
                        <img style = {{position:"relative",bottom:"60px"}} src={shapeline}></img>
                      </div>  
                  </div>
                  <div className='col-md-4'>
                  <div className='shape2'>
                    <img style = {{width:"225px",position:"relative",bottom:"40px"}} src={buyimg6}></img>
                    <h4>LVL 1 DUELCARD</h4>
                    </div>
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

export default Cardflip;