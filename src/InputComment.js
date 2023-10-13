import { useState } from 'react';
import logo1 from './images/avatars/image-juliusomo.png';

function InputComment({onChange}) {

  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  }

  const btnClick = () => {
    onChange(comment);
    setComment('');
  }

  return (
    <div className="input-comment-section">
      <img className='profile-image' src={logo1} alt="" />
      <textarea value={comment} onChange={handleChange} className='input-box-comment' type="text" />
      <button onClick={btnClick} className='button'>Send</button>
    </div>
  )
}

export default InputComment;
