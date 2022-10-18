import React from 'react';
import './Pathtolevel.css';
import firstcenter from "../Edited/5.png";
import shape1 from "../images/branched-arrow-green.svg";
import shape_1 from "../images/arrow-brown.svg";
import shape2 from "../images/arrow-yellow.svg";
import shape3 from "../images/arrow-red.svg";
import Table from 'react-bootstrap/Table';

const Pathtolevel = () => {
  return (
    <div className='body-main'>
      <div className='pathlevel-sec'>
        <div className='container'>
          <div className='section-title'>
              <h2>the  path To Lvl 4</h2>               
           </div>
            <div className='row'>
                <div className='level-img'>
                    <img className="hvr-grow" src={firstcenter}></img>
                    <h3 style={{fontSize:"20px"}}>Level 4 Duel Card NFT (Sponsorship)</h3>                    
                </div>
                <div className='shap-bg'>
                      <img src={shape1}></img>
                </div>

                <div className='mostcard-grid'>
                  <div className='mostcarditem1'>
                    <div className='tite-shape'>
                      <img src={shape_1}></img>
                      <h3>Most Duels Accepted</h3>
                    </div>
                  </div>
                  <div className='mostcarditem2'>
                    <div className='tite-shape'>
                    <img src={shape2}></img>
                      <h3>Most Duels Won</h3>
                    </div>
                  </div>
                  <div className='mostcarditem3'>
                    <div className='tite-shape'>
                    <img src={shape3}></img>
                      <h3>Most Cards Collected</h3>
                    </div>
                  </div>
                </div>


           </div>

           <div className='total-sec'>
           <div className='section-title'>
              <h2>Total Supplies</h2>               
           </div>
           <div className='row tablelevel'>
           <Table striped  hover responsive className='table-main'>
                <thead>
                  <tr>
                    <th></th>
                    <th>Public Mint Supply</th>
                    <th>Partnered Streamer Supply</th>
                    <th>Total Supply (Season)</th>
                    <th>Total Supply Per (12 Months)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lvl 1</td>
                    <td>200</td>
                    <td>-</td>
                    <td>200</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>Lvl 2</td>
                    <td>5</td>
                    <td>5</td>
                    <td>10</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Lvl 3</td>
                    <td>3</td>
                    <td>2</td>
                    <td>5</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>Lvl 4</td>
                    <td>-</td>
                    <td>3*</td>
                    <td>3</td>
                    <td>9</td>
                  </tr>
                </tbody>
              </Table>
            
              <Table striped  hover responsive className='table-main'>                
              <tbody>     
                <tr>
                  <td className='col-md-3'>Worldcard</td>
                  <td className='col-md-3'>-</td>
                  <td className='col-md-3'>-</td>
                  <td className='col-md-3'>Only One Worldcard Will Be Minted And Transferred To The Winners Of Professional Esports Events Sanctioned By A Major Governing Body. *Members Of The Winning Team Will Each Receive
                    Their Own Worldcard To Defend</td>
                </tr>
              </tbody>
            </Table>
           </div>
           <div className='row'>
              <div className='seastion-mt'>
                <h4>*A DuelCard Season Lasts 4 Calendar Months</h4>
                 </div>
              <div className='most-list'>
              <ul className='most-lisrt'>
                <li className='list-hide'>* Lvl 4 Cards Will Be Minted And Transferred To The Wallet/Account Based On These Categories</li>
                <li><span>●</span> Most Duels Accepted</li>
                <li> <span>●</span> Most Duels Won</li>
                <li> <span>●</span> Most Cards Collected</li>
              </ul>
              </div>
             
           </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Pathtolevel;