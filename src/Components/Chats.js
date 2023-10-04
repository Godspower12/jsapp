import React, { useState} from 'react'
import "./Chats.css"
import Image1 from '../assets/image4.jpg';
import ReplyWrapper from './Reply1/ReplyWrapper';
import ReplyWrapper2 from './Reply2/ReplyWrapper2';
import Reply2 from './Reply2/Reply2';
import Replyform0s from './Reply0/Replyform0s';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faReply } from '@fortawesome/free-solid-svg-icons';

const Chats = () => {
const [showReply, setShowReply] = useState(false);
const [showReply2, setShowReply2] = useState(false);
const [showReply3, setShowReply3] = useState(false);



const [isLiked, updateLike] = useState(true);
  const [impression, setImpression] = useState(Math.floor(Math.random() * 100));
  const [background, setbackground] = useState(false);

  const incImpressions = () => {
    if(isLiked) {
    setImpression(impression + 1);
    updateLike(!isLiked)
    }
}
const decImpressions = () => {
    if(!isLiked) {
        setImpression(impression - 1);
        updateLike(!isLiked)
        }
}




const handleClick = () => {
    setShowReply(!showReply)
}

const handleClick3 = () => {
    setShowReply3(!showReply3)
}








    return (
    <div className='chat-wrapper'>
        {background && <div className="background"></div>}
   <section className='chat-body'>
    <div className="impressions">
        <span onClick={incImpressions} className='inc'>+</span>
        <span className='num'>{impression}</span>
        <span onClick={decImpressions} className='dec'>-</span>
    </div>
    <div className="contents">
        <div className="top">
           <div className="top-left">
           <img src={Image1} alt="profile-image" />
            <span className="username">amyrobson</span>
            <div className="date">1 month ago</div>
           </div>
            <div className="top-right">
            <span onClick={handleClick}>
              <FontAwesomeIcon icon={faReply}/>
                Reply</span>
            </div>
            </div>
                <div className="message">
                    Impressive! Though it seems the drag feature could be improved.
                    But overall it looks incredible. 
                    You've nailed the design and the responsiveness at various breakpoints
                    works very well.
                </div>
                <div className="mobile-footer">
                <div className="impressions">
        <span onClick={incImpressions} className='inc'>+</span>
        <span className='num'>{impression}</span>
        <span onClick={decImpressions} className='dec'>-</span>
    </div>
                <div className="mob-top-right">
            <span onClick={handleClick}>
              <FontAwesomeIcon icon={faReply}/>
                Reply</span>
                </div>
            </div>
                      
       
    </div>
   </section>

  <ReplyWrapper background = {background} setbackground = {setbackground} showReply = {showReply} setShowReply={setShowReply}/>
  
  <Reply2 showReply = {showReply} setShowReply={setShowReply}
  background = {background} setbackground = {setbackground}
  showReply2 = {showReply2} setShowReply2={setShowReply2}
   incImpressions = {incImpressions} decImpressions = {decImpressions}
    impression = {impression}/>
  <ReplyWrapper2 
  background = {background} setbackground = {setbackground}
  showReply2 = {showReply2} setShowReply2={setShowReply2}
  showReply3 = {showReply3} setShowReply3={setShowReply3}
   />
  
  





   
<Replyform0s
background = {background} setbackground = {setbackground}
 impression={impression} incImpressions={incImpressions} 
 decImpressions={decImpressions}/>


<div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://godspowerogbudhu.netlify.app/">Gp</a>.
    </div>
    </div>
  )
}

export default Chats