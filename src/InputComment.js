import logo1 from './images/avatars/image-juliusomo.png';

function InputComment() {
  return (
    <div className="input-comment-section">
      <img className='profile-image' src={logo1} alt="" />
      <textarea className='input-box-comment' type="text" />
      <button className='button'>Send</button>
    </div>
  )
}

export default InputComment;
