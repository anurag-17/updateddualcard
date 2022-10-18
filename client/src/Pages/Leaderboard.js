import React from 'react';
import './Leaderboard.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MostCard from '../component/tab/MostCard';

const Leaderboard = () => {
  return (
    <div className='body-main'>
        <div className='leader-sec'>
            <div className='container'>
              <div className='section-title'>
                    <h2>Leaderboard</h2>
             </div>
             <div className='row leader-main'>
                <div className='leaader-tab'>
                <Tabs defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    >
                    <Tab eventKey="home" title="Most Cards">
                        <MostCard />
                    </Tab>
                    <Tab eventKey="profile" title="Most Duels Won">
                        <MostCard />
                    </Tab>
                    <Tab eventKey="contact" title="Most Duels Accepted">
                        <MostCard />
                    </Tab>
                    <Tab eventKey="high" title="Highest Streamer L2 Card Sold Price">
                        <MostCard />
                    </Tab>
                    </Tabs>
                </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Leaderboard;
