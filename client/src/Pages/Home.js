import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import Roadmap from './Roadmap';
import img1 from "../Edited/1.png"
import img2 from "../Edited/2.png"
import img3 from "../Edited/3.png"
import mainimg from "../Edited/Group1.png"


const Home = () => {
  const [userdata, setUserdata] = useState([]);
  const [newuserdata, setnewuserdata] = useState([]);
  const [searchfilter,setsearchfilter] = useState([])
  const[clickeduser,setclickeduser] =  useState("")
  const[targetname,settargetname] =useState("")
  const [firstname,setfirstname] = useState(true)
  const [runfun,setrunfun] = useState(true)
  const data = JSON.parse(localStorage.getItem("nftuser"));


  async function getuserdata(){
    const res = await axios.get("/api/auth/getuserdata");
    setUserdata(res.data);
    const localdata = JSON.parse(localStorage.getItem("nftuser"));
      userdata.sort((a,b)=>a.username.localeCompare(b.username))
    const filtereduser = userdata.filter((items, index) => {
      return items._id !== localdata._id;
    });
    setnewuserdata(filtereduser);
    setsearchfilter(filtereduser)
  };

  const getrecieved=async()=>{
    const newres = await axios.post("/api/auth/challengedata", {
      id:data._id,  
      Accept:true,
      result:"pending"
    });
  newres.data.map((item,index)=>{
  console.log(new Date(item.createdAt).getTime()+259200000)

  })
  
  };

  // if(runfun){
    useEffect(()=>{
      getuserdata()
      getrecieved()
    },[])
  // }
  

  const handleuserclick = async(e)=>{
    setfirstname(false)
  console.log(e)
       setclickeduser(e.target.name)
       settargetname(e.target.value)
       console.log(targetname)
       console.log(clickeduser)
  }

  const handleSearch =(event)=>{
    setrunfun(false)
    let keyword = event.target.value
      const result = newuserdata.filter((user)=>{
        return user.username.toLowerCase().startsWith(keyword.toLowerCase())
      })
    
      setsearchfilter(result)
  }

  return (
    <div>
      <div className='card-section'>
        <div className='container'>
          <div className='row card-main'>
            <div style= {{marginTop:"-1.5rem"}} className='col-lg-6 col-md-6'>
              <div className='card-cont'>
                <h2>Buy. Win. Profit.</h2>
                <p>We provide Limited Edition of L1 DuelCards designed by Content Creators. Buy the L1 DuelCards and get a chance to win more NFTs by challenging your favorite content creator to a Duel. Sell your NFT cards and make profits through the marketplace!</p>
                <p>We bridge the gap between you and the content creator, we keep your cards safe in an escrow hold while you challenge, 
                  play, win and sell your cards!</p>
                 <div className='btn-main'>
                  <Link to = "/contact-us">
                 <button className='hero-btn'>Contact</button>
                  </Link>
                 </div>
              </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='card-img'>
                  <img className = "hvr-grow" src={mainimg} alt="img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="work-section">
          <div className='container'>
            <div className='section-title'>
              <h2>How It Works</h2>
              <p>Purchase a Level 1 DuelCard and start challenging other players for a chance to win their NFTs!</p>
            </div>
            <div className='video-section'>           
            <iframe width="1120" height="630" src="https://www.youtube.com/embed/L6dYyye5a2M" title="DuelCards VO Synced02" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>

        <div className='buy-section'>
          <div className='container'>
            <div className='section-title'>
              <h2>Buy Duel Card</h2>
              <p>Challenge, Win and Sell</p>
            </div>
            <div className='buy-grid'>
              <div className='buy-item1'>
                <div className='buy-ct'>
                  <h3>Buy Lvl1 Duel Card</h3>
                    <div className='buy-img'>
                      <Link to = "/BuyDuelCard">
                       <img className='hvr-grow' style = {{width:"380px"}} src={img1} alt="img"/>
                      </Link>
                     </div>
                    
                </div>
              </div>

              <div className='buy-item1'>
                <div className='buy-ct'>
                  <h3>Buy Lvl2 Duel Card</h3>
                    <div className='buy-img'>
                    <Link to = "/BuyDuelCard">
                       <img className='hvr-grow' style = {{width:"380px"}} src={img2} alt="img"/>
                   </Link>
                     </div>
                </div>
              </div>
              <div className='buy-item1'>
                <div className='buy-ct'>
                  <h3 >Buy Lvl3 Duel Card</h3>
                    <div className='buy-img'>
<Link to ="/BuyDuelCard">
                       <img className='hvr-grow' style = {{width:"370px",position:'relative',left:"30px"}} src={img3} alt="img"/>
</Link>
                     </div>
                </div>
              </div>
            </div>

          
            <div className='btn-buy'>
              <Link to = "/BuyDuelCard">
                 <button className='hero-btn'>Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='marketpl-sec'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-4'>
                <div className='markt-img'>
                <img src="./marketplace.png" alt="img"/>
                </div>
              </div>
              <div className='col-lg-8 col-md-8'>
                <div className='markt-cont'>
                  <h2>NFT Marketplace</h2>
                  <div className='row mt-main'>
                    <div className='col-md-4 mart-img2'>
                      <img src="./marketplac2.png" alt="img"/>
                    </div>
                    <div className='col-md-8' >
                      <div className='mart-ct'>
                      <h3>Auction Your Card</h3>
                      <p>Sell your L2 Duelcards on auction and keep the profits.</p>
                      <div className='btn-market'>
                        <Link to ="/Leaderboard">
                        <button className='hero-btn'>Show more </button>
                        </Link>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container market-item1'>
            <div className='row'>              
              <div className='col-lg-8 col-md-8'>
                <div className='markt-cont'>                 
                  <div className='row mt-main'>                   
                    <div className='col-md-8' >
                      <div className='mart-ct'>
                      <h3>Leaderboards</h3>
                      <p>Know who is leading and atop the chart with the most NFT Duelcards in possession.</p>
                      <div className='btn-market'>
                      <Link to ="/Leaderboard">
                        <button className='hero-btn'>Show more </button>
                        </Link> 
                      </div>
                      </div>
                    </div>
                    <div className='col-md-4 mart-img2'>
                      <img src="./marketplace4.png" alt="img"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-4'>
                <div className='markt-img'>
                <img src="./marketplace3.png" alt="img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='Challenge-sec'>
         <div className='container'>
         <div className='section-title'>
              <h2>Challenge to Win</h2>
              <p>Challenge your favorite Twitch streamer with your L1 Duelcard for their uniquely designed and rare L2 Duelcard. You stand a chance to win 1 out of 5 of your favorite streamer’s rare, unique, and special L2 cards. Sell your newly won L2 Duelcards on auction and get
                 to keep the profits.</p>
           </div>
           <div className='search-bar'>
           <div className="input-group md-form form-sm form-2 pl-0">
            <input onChange={handleSearch} className="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search"/>
            <div className="input-group-append">
              <span className="input-group-text red lighten-3" id="basic-text1"><i className="fas fa-search text-grey"
                  aria-hidden="true"></i></span>
            </div>
          </div>
           </div>
           <div className='tab-challange'>
          
            <div className='tab-section'> 
                    <ul className="nav nav-tabs" id="myTab" role="tablist">


                      {

searchfilter.map((items,index)=>{

  return(
    <>
  <li className="nav-item" role="presentation">
                    <button
                          value={items.username}
                          onClick={handleuserclick}
                          name = {items._id}
                          className="nav-link active tab-btn"
                          id="home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#home"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          <img onClick={handleuserclick}
                            src={require(`../images/tabicon-${index + 1}.png`)}
                            alt="img"
                          />
                          {items.username}
                        </button>
                        </li>
    </>
  )
})}                    
</ul>
                    <div className="tab-content" id="myTabContent">
                    <div className="" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div className='tab-cont'>
                        
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='tab-grid'>
                              <div className='tab-item1'>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="Stephen" role="tabpanel" aria-labelledby="profile-tab">
                    <div className='tab-cont'>
                        <p>Stephen</p>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='tab-grid'>
                              <div className='tab-item1'>
                              <img src="./marketplace3.png" alt="img"/>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6'>                            
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
              </div>
              <div className='btn-tb2'>
                <Link to = "/DuelSomeone">
                 <button className='hero-btn'>Commence Challenge</button>
                </Link>
             </div>
           </div>
         </div>
        </div>


        <div className='rule-sec'>
          <div className='container'>
          <div className='section-title'>
              <h2>Rules / About</h2>
            </div>
            <div className='row rule-main1'>
              <div className='col-md-5 rule-img'>
                <img src="./rule-img1.png" alt="img"/>
              </div>
              <div className='col-md-7'>
                <div className='rule-ct'>
                  <h3>Rules</h3>
                  <p>The two contestants would submit their NFTs to the escrow account before beginning the challenge. Once the terms are agreed upon, the Duel begins!</p>
                 <p>Once the challenge is completed, the contestants would go to the webpage, verify their identity, the winner is confirmed and the NFTs will be released to the winner from the escrow account. The challenge happens off network.</p>
                     <div className='btn-rule'>
                      <Link to ="/AboutRules">
                        <button className='hero-btn'>Learn more </button>
                      </Link>
                   </div>
                </div>
              </div>
            </div>
            <div className='row rule-main2'>
              <div className='col-md-6 rule-img2'>
                <img src="./nefti-img21.png" alt="img"/>
              </div>
              {/* <div className='col-md-6'>
                <div className='rule-ct'>
                  <h3>Rules</h3>
                  <p>The two contestants would submit their NFTs to the escrow account before beginning the challenge. Once the terms are agreed upon, the Duel begins!</p>
                 <p>Once the challenge is completed, the contestants would go to the webpage, verify their identity, the winner is confirmed and the NFTs will be released to the winner from the escrow account. The challenge happens off network.</p>
                     <div className='btn-rule'>
                      <Link to="/AboutRules">
                        <button className='hero-btn'>Show more</button>
                      </Link>
                   </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
<Roadmap/>

      </div>
  )
}

export default Home