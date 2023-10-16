import React, { useState } from 'react';

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
    <div>
      <div>
        <input
          type="text"
          placeholder="Add a comment..."
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleCommentSubmit}>Send</button>
      </div>
      <div>
        {comments.map((comment, commentIndex) => (
          <div key={commentIndex}>
            {comment.text}
            <button onClick={() => handleReplySubmit(commentIndex, prompt('Reply:'))}>
              Reply
            </button>
            {comment.replies.map((reply, replyIndex) => (
              <div key={replyIndex} style={{ marginLeft: '20px' }}>
                {reply}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
