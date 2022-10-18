import React from 'react'
import './Roadmap.css'

const Roadmap = () => {
  return (
    <div>
       <div className='roadmap-sec'>
          <div className='container'>
          <div className='section-title'>
              <h2>Roadmap</h2>
            </div>
            <div className='row roadmap-grid'>
                <div className='road-item1 first-tops'>
                <div className='yeartext'>
                  <h3>NOV <span>2022</span></h3>                  
                </div>
                <div className='map-des '>
                <li><span>●</span>Discord community launch</li> <li><span>●</span>Updated Whitepaper available</li> <li><span>●</span>MVP completed</li></div>
                </div>
                <div className='road-item1 second-tops'>
                <div className='yeartext'>
                  <h3>FEB <span>2023</span></h3>                  
                </div>
                <div className='map-des margin'>
                <li><span>●</span>Smart Contract development</li>
                <li>
                <span>●</span> Whitelist alpha testing (no smart contracts)
                </li>
                  </div>
                </div>
                <div className='road-item1 third-sec'>
                <div className='yeartext'>
                  <h3>MAY <span>2023</span></h3>                  
                </div>
                <div className='map-des'>
                <li><span>●</span>Partnered Streamer Teaser </li>
                  <li><span>●</span>Public Beta testing (w/ NFT and Smart Contracts)</li></div>
                </div>
                <div className='road-item1 fourth-sec'>
                <div className='yeartext'>
                  <h3>AUG <span>2023</span></h3>                  
                </div>
                <div style ={{marginBottom:"15px"}} className='map-des'>
                <li><span>●</span> Partnered streamer announcement</li>
                  <li><span>●</span>First DuelCards challenge live on twitich.tv!</li>
                  </div>
                </div>
                <div className='road-item1 fifth-sec'>
                <div className='yeartext'>
                  <h3>NOV <span>2022</span></h3>                  
                </div>
                <div style={{marginTop:"20px"}} className='map-des'>
                <li><span>●</span>Live public launch and First <br /> mint event</li></div>
                </div>
            </div>
           
          </div>
        </div>
    </div>
  )
}

export default Roadmap
