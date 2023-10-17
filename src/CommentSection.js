import React, { useState } from 'react';
import logo1 from './images/avatars/image-juliusomo.png';

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
      
      {/* <div>
        {comments.map((comment, commentIndex) => (
          <div className='card' key={commentIndex}>
            {comment.text}
            <button onClick={() => handleReplySubmit(commentIndex, prompt('Reply:'))}>
              Reply
            </button>
            {comment.replies.map((reply, replyIndex) => (
              <div className='card' key={replyIndex} style={{ marginLeft: '20px' }}>
                {reply}
              </div>
            ))}
          </div>
        ))}
      </div> */}

      <div className="commentInfo">
        
          {comments.map((comment, commentIndex) => (
            <div className="commentInfoCard">
             <div className="commentInfoCard-top">
              <div className="commentInfoCard-top-left">
                <img className='profile-image' src={logo1} alt="" />
                <p className='username'>username</p>
              </div>
              <div className="commentInfoCard-top-right">
                 <button onClick={() => handleReplySubmit(commentIndex, prompt('Reply:'))}>
                   Reply
                 </button>
              </div>
             </div>
             <p>{comment.text}</p>
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
