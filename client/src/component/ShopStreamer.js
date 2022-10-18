import React from 'react';
import './ShopStreamer.css';
import Form from 'react-bootstrap/Form';

const ShopStreamer = () => {
  return (
    <div className='body-main'>
      <div className='shopse-sec'>
        <div className='container'>
          <div className='section-title'>
                    <h2>Shop For Streamer Cards</h2>
          </div>
          <div className='row'>
            <div className='steameracrd-grid'>
                <div className='stemcard1'>
                    <div className='stemprofile'>
                    <div class="clearfix">
                                       <img src="./tabicon8.png" alt="img"/>
                                    <button type="button" class="btn float-end">Estebana</button>
                       </div> 
                    </div>
                    <div className='profil-grp'>
                      <img src="./challenge-img/1.jpg" alt="img"/>
                      <img src="./challenge-img/2.jpg" alt="img"/>
                    </div>
                    <div className='profil-grp3'>
                      <img src="./challenge-img/3.jpg" alt="img"/>
                      <img src="./challenge-img/4.jpg" alt="img"/>
                      <img src="./challenge-img/5.jpg" alt="img"/>
                    </div>            
                </div>

                <div className='stemcard1'>
                    <div className='stemprofile'>
                    <div class="clearfix">
                                       <img src="./tabicon8.png" alt="img"/>
                                    <button type="button" class="btn float-end">Estebana</button>
                       </div> 
                    </div>
                    <div className='profil-grp'>
                      <img src="./challenge-img/1.jpg" alt="img"/>
                      <img src="./challenge-img/2.jpg" alt="img"/>
                    </div>
                    <div className='profil-grp3'>
                      <img src="./challenge-img/3.jpg" alt="img"/>
                      <img src="./challenge-img/4.jpg" alt="img"/>
                      <img src="./challenge-img/5.jpg" alt="img"/>
                    </div>            
                </div>
            </div>
          </div>
            <div className='L1dCycle'>
              <div className='section-title'>
                    <h2>L1 Duel Card Lifecycle</h2>
                    <p>Players purchase either a Level 1 or Universal DuelCard Players can engrave their username on 
                      the card. Forever saved in the blockchain</p>
              </div>
              <div className='tdata'>
                <div className='transfer'>
                  <img src="./Arrowl1.png" alt="img"/>  
                  <p>DuelCard (NFT) Transfer</p>
                </div>
                <div className='transfer'>
                  <img src="./Arrowl1.png" alt="img"/>  
                  <p>Email/Account Notification</p>
                </div>
              </div>

              <div className='nftlifecyle-grid'>
                <div className='nft1'>
                  <div className='nft-ct'>
                    <p>DuelCards can also be put up for auction on our open marketplace. Level 2 cards are only available on the Marketplace</p>
                    <h4>3 TYPES/PRICES:</h4>
                    <ul>
                      <li>PL Streamer Cards</li>
                      <li>Seasonal/LE Cards </li>
                      <li>Universal Challenge Cards</li>
                    </ul>
                  </div>
                </div>
                <div className='nft1'>
                  <div className='nft-ct'>
                    <p>DuelCards can also be put up for auction on our open marketplace. Level 2 
                      cards are only available on the Marketplace</p>                    
                  </div>
                </div>
                <div className='nft1'>
                  <div className='nft-ct'>
                    <p>Your DuelCard will be moved to your Gallery. Showing off your Gallery of won DuelCards from the losers you beat is a great way
                       to remind your friend why you're better than them</p>
                   
                  </div>
                </div>
                <div className='nft1'>
                  <div className='nft-ct'>
                    <p>Players can start a Duel Request to challenge their favorite Content Creator or anyone with a DuelCard with the coveted Universal 
                      DuelCard.</p>                   
                  </div>
                </div>
              
              </div>
            </div>  
        </div>
      </div>
    </div>
  )
}

export default ShopStreamer;