import logo2 from './images/avatars/image-amyrobson.png';
import { BsFillReplyFill } from 'react-icons/bs';
import { useState } from 'react';

function CommentInfo({comment}) {

  const handleReplyClick = () => {
    
  }

  return (
    <div className="comment-info">
      <div className="comment-info-top">
        <div className="comment-info-top-left">
            <img className="profile-image-2" src={logo2} alt="" />
            <p className='username'>username</p>
        </div>
        <div className="comment-info-top-right">
            <button onClick={handleReplyClick} className='button-reply'> <BsFillReplyFill /> Reply</button>
        </div>
      </div>
      <div className="comment-info-bottom">
        <p className='comment-info-text'>{comment}</p>
      </div>
    </div>
  )
}

export default CommentInfo;
