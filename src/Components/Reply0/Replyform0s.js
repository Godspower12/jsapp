import React, { useState } from 'react'
import ReplyForm0 from './ReplyForm0'
import EditForm from './EditForm'
import Reply3 from './Reply3'

const Replyform0s = ({background, setbackground}) => {
    const [replies, setReplies] = useState([])
    
        const addReply4 = reply => {
        setReplies([...replies, {id: Math.random() * 100, task: reply, isEditing: false}])
            }
           
            const deleteReply = (id) => {
                setReplies(replies.filter(rep => rep.id !== id))
            }
        
            const editReply = (id) => {
                setReplies(replies.map(rep => rep.id === id ? {...rep, isEditing : !rep.isEditing} : rep))
            }

           const editTask = (task, id) => {
        setReplies(replies.map(reply => reply.id === id ? {...reply, task, isEditing : !reply.isEditing} : reply))
            }
  return (
    <div className='reply-wrapper'>
    {replies.map((reply, index) => (
    reply.isEditing ? (<EditForm key={index} task={reply} editReply={editTask}/>) :
     ( <Reply3 task = {reply} key={index} editReply={editReply}
       background = {background} setbackground = {setbackground}
       replies = {replies} setReplies = {setReplies}
       />)

  ))}
    <ReplyForm0 addReply = {addReply4} />  
    </div>
    
  )
}

export default Replyform0s