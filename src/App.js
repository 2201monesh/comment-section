import CommentInfo from "./CommentInfo";
import InputComment from "./InputComment";

function App() {
  return (
    <div className="main-section">
      <div className="main-top">
        <CommentInfo />
        <CommentInfo />
        <CommentInfo />
        <CommentInfo />
        <CommentInfo />
      </div>
      <div className="main-bottom">
        <InputComment />
      </div>
    </div>
  );
}

export default App;
