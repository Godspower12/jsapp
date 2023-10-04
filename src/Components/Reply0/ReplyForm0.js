import React, { useState } from 'react'
import Image2 from '../../assets/image2.jpg'

const ReplyForm0 = ({ addReply}) => {
    const [value, setValue] = useState('');
      
    const handleChange0 = (e) => {
    const {value} = e.target;
    setValue(value)
    }

          const handleSubmit0 = (e) => {
              e.preventDefault();
              if(value == ""){
                alert('Field Must be filled')
                return
              }else {
                  addReply(value)
                  setValue('');
              }
          }


  return (
        <div className="reply-section">
   <div className="reply-contents">

       <form onSubmit={handleSubmit0} >
 <img src= {Image2} alt="image2" />
       <textarea value = {value} onChange = {handleChange0} placeholder='Add Comment...' className='textarea-input' id="" cols="45" rows="4"></textarea>
       <button type='submit'>REPLY</button>
       </form>
   </div>
  </div>

  )
}

export default ReplyForm0