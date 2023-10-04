import React from 'react';
import Image2 from '../../assets/image2.jpg'
import { useState } from 'react';

const EditForm = ({task, editReply}) => {
  const [value, setValue] = useState(task.task);
    const handleChange = (e) => {
        const {value} = e.target;
        setValue(value);
      
      }
      
      const handleSubmit = (e) => {
          e.preventDefault();
          if(value == ""){
            alert('Field Must be filled')
            return
          }else {
            editReply(value, task.id)
          }
      }

  return (
        <div className="reply-section">
   <div className="reply-content">
       <img src= {Image2} alt="image2" />
       <form onSubmit={handleSubmit} >
       <textarea onChange={handleChange} value = {value} className='textarea-input' name="" id="" cols="45" rows="4"></textarea>
       <button type='submit'>UPDATE</button>
       </form>
   </div>
  </div>
  
  )
}

export default EditForm