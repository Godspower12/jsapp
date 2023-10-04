import  { useState } from 'react'
import ReplyForm from './ReplyForm'
import Reply from './Reply'
import EditForm from './EditForm'

const ReplyWrapper = ({showReply, setShowReply, background, setbackground}) => {
    const [replies, setReplies] = useState([])
  
  
    const editReply = (id) => {
        setReplies(replies.map(rep => rep.id === id ? {...rep, isEditing : !rep.isEditing} : rep))
    }

    const addReply = reply => {
     setReplies([...replies, {id: Math.random() * 100, task: reply, isEditing: false}])
    }
   

   const editTask = (task, id) => {
setReplies(replies.map(reply => reply.id === id ? {...reply, task, isEditing : !reply.isEditing} : reply))
    }
    return (
    <div className='reply-wrapper'>
        {showReply &&  
        <ReplyForm addReply = {addReply} showReply ={showReply} setShowReply = {setShowReply}/>

  }
  {replies.map((reply, index) => (
    reply.isEditing ? (<EditForm key={index} task={reply} editReply={editTask}/>) :
     ( <Reply task = {reply} key={index}  EditReply={editReply} 
        background = {background} setbackground = {setbackground}
        replies = {replies} setReplies = {setReplies}/>)

  ))}
    </div>
  )
}

export default ReplyWrapper