import React, {useState, useEffect} from 'react'
import Banner from "../../assets/banner.png"
import {Button} from "react-bootstrap"
import Pfp1 from "../../assets/pfp1.png"
import Pfp2 from "../../assets/pfp2.png"
import Pfp3 from "../../assets/pfp3.png"
import Pfp4 from "../../assets/pfp4.png"
import Pfp5 from "../../assets/pfp5.png"
import Pfp6 from "../../assets/pfp1.png"
import Pfp7 from "../../assets/pfp2.png"
import Pfp8 from "../../assets/pfp3.png"
import Pfp9 from "../../assets/pfp4.png"
import Card1 from "../../assets/post1.png"
import Card2 from "../../assets/post2.png"
import Card3 from "../../assets/post3.png"
import Card4 from "../../assets/post4.png"
import Card5 from "../../assets/post5.png"
import Card6 from "../../assets/post6.png"
import Card7 from "../../assets/post7.png"
import Card8 from "../../assets/post8.png"
import Card9 from "../../assets/post9.png"
import axios from 'axios';
import { apiUrl } from '../../utils';
import { Link } from 'react-router-dom';

const Blog = () => {

        const [blogData, setBlogData] = useState([])
      
        useEffect(() => {
          axios.get(`${apiUrl}get_blogs`)
            .then(function (response) {
              setBlogData(response.data)
            })
            .catch(function (error) {
            
              console.log(error);
            })
            .finally(function () {
            
            });
        }, [])
      
        console.log("Data in blog", blogData)

  return (
    
    <div>

        <div className='blog_title'>
            <h2>Page Title</h2>
            <ul><li>home</li><li>Link One</li></ul>
            <Link to="/add_update_blog">
          <Button>Add Blog</Button>
        </Link>
        </div>

            <div className='homepage'>
        <div className='homepage_banner'>
            <img src={Banner} alt="" />
        </div>
        <div className='homepage_card'>
            <Button>Technology</Button>
            <h3><a href="/post">The Impact of Technology on the Workplace: How Technology is Changing</a></h3>
            <div className='homepage_png2'>
            <img src={Pfp2} alt="" />
            <p>Jason Francisco</p>
            <p>August 20, 2022</p>
            </div>
        </div>
        <div className='homepage_ad'>
            <small>Advertisement</small>
            <p>You can place ads</p>
            <small className='small'>750x100</small>
        </div>
        <div className='posts'>
            <h2>Latest Posts</h2>
        </div>
            <div className='Cards'>
                    {/* {/* <div className='homepage_cards'> 
                        <img src={Card1} alt="" className='img'/>
                        <button>Technology</button>
                        <h4><a href="/post">The Impact of Technology on the Workplace: How Technology is Changing</a></h4>
                        <div className='homepage_png2'>
                            <img src={Pfp1} alt="" />
                            <p>Jason Francisco</p>
                            <p>August 20, 2022</p>
                        </div>
                    </div> */}
              {blogData?.map((item, index) => {
              return (
                <div className="card" key={index} >
                <h1>{blogData?.name}</h1>
                  </div>
              )
            })}
                    {/* <div className='homepage_cards'> 
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
                            <img src={Pfp6} alt="" />
                            <p>Jason Francisco</p>
                            <p>August 20, 2022</p>
                        </div>
                    </div>
                    <div className='homepage_cards'> 
                        <img src={Card7} alt="" className='img'/>
                        <button>Technology</button>
                        <h4><a href="/post">The Impact of Technology on the Workplace: How Technology is Changing</a></h4>
                        <div className='homepage_png2'>
                            <img src={Pfp7} alt="" />
                            <p>Jason Francisco</p>
                            <p>August 20, 2022</p>
                        </div>
                    </div>
                    <div className='homepage_cards'> 
                        <img src={Card8} alt="" className='img'/>
                        <button>Technology</button>
                        <h4><a href="/post">The Impact of Technology on the Workplace: How Technology is Changing</a></h4>
                        <div className='homepage_png2'>
                            <img src={Pfp8} alt="" />
                            <p>Jason Francisco</p>
                            <p>August 20, 2022</p>
                        </div>
                    </div>
                    <div className='homepage_cards'> 
                        <img src={Card9} alt="" className='img'/>
                        <button>Technology</button>
                        <h4><a href="/post">The Impact of Technology on the Workplace: How Technology is Changing</a></h4>
                        <div className='homepage_png2'>
                            <img src={Pfp9} alt="" />
                            <p>Jason Francisco</p>
                            <p>August 20, 2022</p>
                        </div>
                    </div> */}
            </div>
            <div className='homepage_ad2'>
            <small>Advertisement</small>
            <p>You can place ads</p>
            <small className='small'>750x100</small>
        </div>
    </div>
    </div>
  )
}

export default Blog