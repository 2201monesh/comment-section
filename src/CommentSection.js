import React, { useState } from 'react';
import logo1 from './images/avatars/image-juliusomo.png';
import logo2 from './images/avatars/image-amyrobson.png';
import { BsFillReplyFill } from 'react-icons/bs';

const CommentSection = () => {
  const [input, setInput] = useState('');
  const [comments, setComments] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (input.trim() !== '') {
      setComments([...comments, { text: input, replies: [] }]);
      setInput('');
    }else{
      alert("Enter comment in input field...")
    }
  };

  const handleReplySubmit = (commentIndex, replyText) => {
    if (replyText.trim() !== '') {
      const updatedComments = [...comments];
      updatedComments[commentIndex].replies.push(replyText);
      setComments(updatedComments);
    }
  };

  return (
    <div className='main-section'>

      <div className="commentInfo">
        
          {comments.map((comment, commentIndex) => (
            <div className="commentInfoCard-outer">
              <div className="commentInfoCard">
               <div className="commentInfoCard-top">
                <div className="commentInfoCard-top-left">
                  <img className='profile-image' src={logo1} alt="" />
                  <p className='username'>Monesh</p>
                </div>
                <div className="commentInfoCard-top-right">
                 <button className='reply-button' onClick={() => handleReplySubmit(commentIndex, prompt('Reply:'))}>
                   <BsFillReplyFill /> Reply
                 </button>
                </div>
               </div>
               <p>{comment.text}</p>
              </div>

              {comment.replies.length >= 1 && <div className="commentInfoCard-reply">
                {comment.replies.map((reply, replyIndex) => (
                  <div className="card" key={replyIndex} >
                    <div className="card-top">
                       <img className='profile-image' src={logo2} alt="" />
                       <p className='username'>User</p>
                    </div>
                    <div className="card-bottom">
                      {reply}
                    </div>
                  </div>
                ))}
              </div>}
            </div>
          ))}
 
      </div>

      <div className='input-section'>
        <textarea
          type="text"
          placeholder="Add a comment..."
          value={input}
          onChange={handleInputChange}
        />
        <button className='send-button' onClick={handleCommentSubmit}>Send</button>
      </div>

    </div>
  );
};

export default CommentSection;
