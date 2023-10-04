import React, { useState } from 'react'
import Image2 from '../../assets/image2.jpg'

const ReplyForm = ({addReply,showReply2,setShowReply2}) => {
const [value, setValue] = useState('');
      
const handleChange = (e) => {
const {value} = e.target;
setValue(value)
console.log(value)

}
      const handleSubmit2 = (e) => {
          e.preventDefault();
          if(value == ""){
            alert('Field Must be filled')
            return
          }else {
              addReply(value)
              setValue('');
              setShowReply2(!showReply2)
          }
      }
  return (
    <div className="reply-section">
   <div className="reply-content">
       <img src= {Image2} alt="image2" />
       <form onSubmit={handleSubmit2} >
       <textarea value = {value} onChange={handleChange} placeholder='Add Comment...' className='textarea-input' id="" cols="45" rows="4"></textarea>
       <button type='submit'>REPLY</button>
       </form>
   </div>
  </div>
  )
}

export default ReplyForm