import React from 'react'
import './Home.css'
import MainImage from './images/drawers.jpg'
import ProfileImage from './images/avatar-michelle.jpg'
import IconShare from './images/icon-share.svg'

function Home() {
  return (
    <div className='home'>
     <div className="container">
        <div className="leftContainer">
          <img src={MainImage} alt="MainImage" />
        </div>
        <div className="rightContainer">
          <div className="title">
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h3>
          </div>
          <div className="detailDesc">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
          </div>
          <div className="socialSec">
            <div className="profileSec">
             <div className="imageSec">
                <img src={ProfileImage} alt="ProfileImage" />
             </div>
             <div className="profileDetail">
                <h6>Michlee Apleton</h6>
                <p>28 June 2020</p>
             </div>
            </div>
            <div className="sharedSec">
               <img src={IconShare} alt="IconShare" />
            </div>
          </div>
        </div>
     </div> 
    </div>
  )
}

export default Home
