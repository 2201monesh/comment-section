import logo2 from './images/avatars/image-amyrobson.png';
import { BsFillReplyFill } from 'react-icons/bs';
import { useState } from 'react';

function CommentInfo({key, comment, replyText, commentReplies}) {

  // console.log(commentReplies);
  const handleReplyClick = (key, reply) => {
    replyText(key, reply);
  }

  return (
    <div className="comment-info-outer">
      <div className="comment-info" key={key}>
        <div className="comment-info-top">
          <div className="comment-info-top-left">
            <img className="profile-image-2" src={logo2} alt="" />
            <p className='username'>username</p>
          </div>
          <div className="comment-info-top-right">
            <button onClick={() => handleReplyClick(key, prompt('Reply : '))} className='button-reply'> <BsFillReplyFill /> Reply</button>
          </div>
        </div>
        <div className="comment-info-bottom">
          <p className='comment-info-text'>{comment}</p>
        </div>
      </div>
      {commentReplies && <div className="comment-info comment-info-reply">
        {commentReplies.map((reply, replyIndex) => <p key={replyIndex}>{reply}</p>)}
      </div>}
    </div>
  )
}

export default CommentInfo;
