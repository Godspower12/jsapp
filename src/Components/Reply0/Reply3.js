import React, { useState } from 'react'
import Image2 from '../../assets/image2.jpg'
import EditForm from './EditForm';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Reply2 = ({task, editReply, replies, setReplies, background, setbackground}) => {

  const [isLiked, updateLike] = useState(true);
  const [impression, setImpression] = useState(Math.floor(Math.random() * 100));
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState('');


  const confirmDelete = (id) => {
    setbackground(!background)
    setShow(!show);
    console.log(id)
    setDeleteId(id);
  }
  
  const deleteReply = (id) => {
    setbackground(!background)
    setReplies(replies.filter(rep => rep.id !== id))
    console.log(id)
    setShow(!show);
}


const cancelDelete = () => {
  setbackground(!background)
  setShow(!show);
    
  }



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
    
        <div>  

{show && <div className="modal">
        <h2>Delete Comment</h2>
        <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        <div className="button">
            <button onClick={cancelDelete} className='cancel-btn'>NO, CANCEL</button>
            <button onClick={ () => deleteReply(task.id)} className='delete-btn'>YES, DELETE</button>
        </div>
    </div>}
        <li className='last-list'>
             <section className='chat-body'>
             <div className="impressions">
               <span onClick={incImpressions} className='inc'>+</span>
                <span className='num'>{impression}</span>
                <span onClick={decImpressions} className='dec'>-</span>
               </div>
        
               <div className="contents">
              <div className="top">
                   <div className="top-left">
                  <img src= {Image2} alt="image2" />
                 <span className="username">juliusomo</span>
                  <span className="you">you</span>
                     <div className="date">Just Now</div>
                   </div>
        
                   <div className="top-right">
                 <span className="delete" onClick={() => confirmDelete(task.id)}>
                 <FontAwesomeIcon icon={faTrash}/>
                 Delete
               </span>
               <span className="edit" onClick={() => editReply(task.id)}>
                 <FontAwesomeIcon icon={faPenToSquare}/>
                 Edit
               </span>
              
               </div>
               </div>
               <span  className='reply-list'>{task.task}</span>
             </div>
               </section>
                 </li>
    </div>
  )
}

export default Reply2