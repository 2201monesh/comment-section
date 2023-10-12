import { useState } from 'react';
import logo1 from './images/avatars/image-juliusomo.png';

function InputComment() {

  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  }

  return (
    <div className="input-comment-section">
      <img className='profile-image' src={logo1} alt="" />
      <textarea onChange={handleChange} className='input-box-comment' type="text" />
      <button className='button'>Send</button>
    </div>
  )
}

export default InputComment;
