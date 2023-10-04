import React, { useState } from 'react'
import Image3 from '../../assets/image3.jpg'

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
const Reply2 = ({showReply2,setShowReply2}) => {

    const handleClick2 = () => {
        setShowReply2(!showReply2)
    }

    const [isLiked, updateLike] = useState(true);
    const [impression, setImpression] = useState(Math.floor(Math.random() * 100));
  
  
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
  
  
  
    return (
    <div className="chat2">
    <section className='chat-body'>
     <div className="impressions">
         <span onClick={incImpressions} className='inc'>+</span>
         <span className='num'>{impression}</span>
         <span onClick={decImpressions} className='dec'>-</span>
     </div>
     <div className="contents">
         <div className="top">
            <div className="top-left">
            <img src={Image3} alt="profile-image" />
             <span className="username">maxblagun</span>
             <div className="date"> 2 weeks ago</div>
            </div>
             <div className="top-right">
             <span onClick={handleClick2}>
                <FontAwesomeIcon icon={faReply}/>
                Reply</span>
             </div>
             </div>
                 <div className="message">
                    Woah, your project looks awesome! 
                    How long have you been codinf for? I'm still new, 
                    but think i want to dive into React as well soon. 
                    Perhaps you can give me an insight on where i can learn? Thanks! 
                 </div>
                 

               <div className="mobile-footer">
                <div className="impressions">
        <span onClick={incImpressions} className='inc'>+</span>
        <span className='num'>{impression}</span>
        <span onClick={decImpressions} className='dec'>-</span>
    </div>
                <div className="mob-top-right">
            <span onClick={handleClick2}>
              <FontAwesomeIcon icon={faReply}/>
                Reply</span>
                </div>
            </div>        
        
     </div>
    </section>
    
 
 
 
 
    </div>
   
  )
}

export default Reply2