import logo2 from './images/avatars/image-amyrobson.png';

function CommentInfo() {
  return (
    <div className="comment-info">
      <div className="comment-info-top">
        <div className="comment-info-top-left">
            <img className="profile-image-2" src={logo2} alt="" />
            <p className='username'>username</p>
        </div>
        <div className="comment-info-top-right">
            <button>Reply</button>
        </div>
      </div>
    </div>
  )
}

export default CommentInfo;
