// look at the likes on this component.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const LikeSection = props => {
  const clickHandler = () => {
    console.log('I have been clicked');
    props.setLike(props.like + 1);
  };

  return (
    <div>
      <div className='like-section' key='likes-icons-container'>
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={faHeart} onClick={clickHandler} />
        </div>
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className='like-number'>{props.like} likes</p>
    </div>
  );
};

export default LikeSection;
