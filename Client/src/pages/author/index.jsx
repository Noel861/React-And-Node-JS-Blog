import React from 'react'
import Card1 from '../.././assets/post1.png'
import Card2 from '../.././assets/post2.png'
import Card3 from '../.././assets/post3.png'
import Card4 from '../.././assets/post4.png'
import Card5 from '../.././assets/post5.png'
import Card6 from '../.././assets/post6.png'
import Card7 from '../.././assets/post7.png'
import Card8 from '../.././assets/post8.png'
import Card9 from '../.././assets/post9.png'
import Pfp1 from '../.././assets/pfp1.png'
import Pfp2 from '../.././assets/pfp2.png'
import Pfp3 from '../.././assets/pfp3.png'
import Pfp4 from '../.././assets/pfp4.png'
import Pfp5 from '../.././assets/pfp5.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Button } from 'react-bootstrap'

const index = () => {
    let lastname = JSON.parse(localStorage.getItem('user_data'));
  return (
    <div>

<div className='Author'>
    <div className='author_padding'>
    <img src={Pfp5} alt="" />
    <h4>{lastname.name}</h4>
    <p>{lastname.email}</p>
    <h5>Meet {lastname.name}, a passionate writer and blogger with a love for technology and travel. {lastname.name} holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.</h5>
    <IconContext.Provider value={{ className: "author_icons" }}>
    <FaFacebookSquare /><FaSquareXTwitter /><FaSquareInstagram /><FaYoutube />
    </IconContext.Provider>
    </div>
    </div>
    <div className='author_button'>
    <Button><a href="/Auth">View All Authors</a></Button>
    </div>

    <div className='posts1'>
        <h2>Latest Posts</h2>
    </div>

    <div className='Cards1'>
                  
                  <div className='homepage_cards'> 
                      <img src={Card1} alt="" className='img'/>
                      <button>Technology</button>
                      <h4><a href="/post">The Impact of Technology on the Workplace: How Technology is Changing</a></h4>
                      <div className='homepage_png2'>
                          <img src={Pfp1} alt="" />
                          <p>Jason Francisco</p>
                          <p>August 20, 2022</p>
                      </div>
                  </div>

                  <div className='homepage_cards'> 
                      <img src={Card2} alt="" className='img'/>
                      <button>Technology</button>
                      <h4><a href="/post">The Impact of Technology on the Workplace: How Technology is Changing</a></h4>
                      <div className='homepage_png2'>
                          <img src={Pfp2} alt="" />
                          <p>Jason Francisco</p>
                          <p>August 20, 2022</p>
                      </div>
                  </div>
                  <div className='homepage_cards'> 
                      <img src={Card3} alt="" className='img'/>
                      <button>Technology</button>
                      <h4><a href="/post">The Impact of Technology on the Workplace: How Technology is Changing</a></h4>
                      <div className='homepage_png2'>
                          <img src={Pfp3} alt="" />
                          <p>Jason Francisco</p>
                          <p>August 20, 2022</p>
                      </div>
                  </div>
                  <div className='homepage_cards'> 
                      <img src={Card4} alt="" className='img'/>
                      <button>Technology</button>
                      <h4><a href="/post">The Impact of Technology on the Workplace: How Technology is Changing</a></h4>
                      <div className='homepage_png2'>
                          <img src={Pfp4} alt="" />
                          <p>Jason Francisco</p>
                          <p>August 20, 2022</p>
                      </div>
                  </div>
                  <div className='homepage_cards'> 
                      <img src={Card5} alt="" className='img'/>
                      <button>Technology</button>
                      <h4><a href="/post">The Impact of Technology on the Workplace: How Technology is Changing</a></h4>
                      <div className='homepage_png2'>
                          <img src={Pfp5} alt="" />
                          <p>Jason Francisco</p>
                          <p>August 20, 2022</p>
                      </div>
                  </div>
                  <div className='homepage_cards'> 
                      <img src={Card6} alt="" className='img'/>
                      <button>Technology</button>
                      <h4><a href="/post">The Impact of Technology on the Workplace: How Technology is Changing</a></h4>
                      <div className='homepage_png2'>
                          <img src={Pfp1} alt="" />
                          <p>Jason Francisco</p>
                          <p>August 20, 2022</p>
                      </div>
                  </div>
                  <div className='homepage_cards'> 
                      <img src={Card7} alt="" className='img'/>
                      <button>Technology</button>
                      <h4><a href="/post">The Impact of Technology on the Workplace: How Technology is Changing</a></h4>
                      <div className='homepage_png2'>
                          <img src={Pfp2} alt="" />
                          <p>Jason Francisco</p>
                          <p>August 20, 2022</p>
                      </div>
                  </div>
                  <div className='homepage_cards'> 
                      <img src={Card8} alt="" className='img'/>
                      <button>Technology</button>
                      <h4><a href="/post">The Impact of Technology on the Workplace: How Technology is Changing</a></h4>
                      <div className='homepage_png2'>
                          <img src={Pfp3} alt="" />
                          <p>Jason Francisco</p>
                          <p>August 20, 2022</p>
                      </div>
                  </div>
                  <div className='homepage_cards'> 
                      <img src={Card9} alt="" className='img'/>
                      <button>Technology</button>
                      <h4><a href="/post">The Impact of Technology on the Workplace: How Technology is Changing</a></h4>
                      <div className='homepage_png2'>
                          <img src={Pfp4} alt="" />
                          <p>Jason Francisco</p>
                          <p>August 20, 2022</p>
                      </div>
                  </div>
          </div>
    </div>
  )
}

export default index