import { useState } from "react";
import CommentInfo from "./CommentInfo";
import InputComment from "./InputComment";

function App() {

  const [comments, setComments] = useState([]);

  const handleClick = (event) => {
    setComments([...comments, {text: event, replies: []}]);
  }

  return (
    <div className="main-section">
      <div className="main-top">
        {comments.map((comment, commentIndex) => (<CommentInfo key={commentIndex} comment={comment.text} />))}
      </div>
      <div className="main-bottom">
        <InputComment onChange={handleClick} />
      </div>
    </div>
  );
}

export default App;
