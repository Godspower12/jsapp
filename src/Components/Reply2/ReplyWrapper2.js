import  { useState } from 'react'
import ReplyForm from './ReplyForm'
import Reply3 from './Reply3'
import Image4 from '../../assets/image4.jpg'
import EditForm from './EditForm'
import ReplyForm3 from '../Reply3/ReplyForm3'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';

const ReplyWrapper2 = ({showReply2, setShowReply2, 
    setShowReply3, showReply3,
    background = {background},
    setbackground = {setbackground}
}) => {
    const [replies, setReplies] = useState([])
   



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


    const deleteReply = (id) => {
        setReplies(replies.filter(rep => rep.id !== id))
    }
    const editReply = (id) => {
        setReplies(replies.map(rep => rep.id === id ? {...rep, isEditing : !rep.isEditing} : rep))
    }

    const addReply2 = reply => {
setReplies([...replies, {id: Math.random() * 100, task: reply, isEditing: false}])
    }

    const addReply3 = reply => {
setReplies([...replies, {id: Math.random() * 100, task: reply, isEditing: false}])
    }
   

   const editTask = (task, id) => {
setReplies(replies.map(reply => reply.id === id ? {...reply, task, isEditing : !reply.isEditing} : reply))
    }



    const handleClick3 = () => {
        setShowReply3(!showReply3)
    }
    
    return (    
    <div className='reply-wrapper'>
        {showReply2 &&  
        <ReplyForm addReply = {addReply2} showReply2 ={showReply2} setShowReply2 = {setShowReply2}/>

  }




  <div className="chat2ExtRep-wrapper">
 
 
 
 <div className="chat2ExtRep">
 <section className='chat-body'>
  <div className="impressions">
      <span onClick={incImpressions} className='inc'>+</span>
      <span className='num'>{impression}</span>
      <span onClick={decImpressions} className='dec'>-</span>
  </div>
  <div className="contents">
      <div className="top">
         <div className="top-left">
         <img src={Image4} alt="profile-image" />
          <span className="username">ramsesmiron</span>
          <div className="date"> 1 weeks ago</div>
         </div>
          <div className="top-right">
          <span onClick={handleClick3}>
            <FontAwesomeIcon icon={faReply}/>
            Reply</span>
          </div>
          </div>
              <div className="message">
                 <span>@maxblagun</span> If you're still new, i'd recommend focusing on the 
                 fundamentals of HTML, CSS, and JS before considering React. Its very tempting
                 to jump ahead but lay a solid foundation first.  
              </div>
              
              <div className="mobile-footer">
                <div className="impressions">
        <span onClick={incImpressions} className='inc'>+</span>
        <span className='num'>{impression}</span>
        <span onClick={decImpressions} className='dec'>-</span>
    </div>
                <div className="mob-top-right">
            <span onClick={handleClick3}>
              <FontAwesomeIcon icon={faReply}/>
                Reply</span>
                </div>
            </div>       
     
  </div>
 </section>

 {showReply3 && 
 <ReplyForm3  addReply = {addReply3} showReply3 ={showReply3} setShowReply3 = {setShowReply3} />
}


 </div>
 </div>




  {replies.map((reply, index) => (
    reply.isEditing ? (<EditForm key={index} task={reply} editReply={editTask}/>) :
     ( <Reply3 background = {background} 
        setbackground = {setbackground} task = {reply}
         key={index} deleteReply = {deleteReply} EditReply={editReply}
         replies = {replies} setReplies = {setReplies}
         />)

  ))}
    </div>
  )
}

export default ReplyWrapper2