import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
        <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D0%BA%D0%B0%D1%80%D1%82%D0%BD%D0%B8,_%D0%9F%D0%BE%D0%BB" target="_blank">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhc6hzxsNbmySvs6PsqyrlZ2DAxWOvzQq3NXSJjDta-7BQmZyO' />
        </a>
        <div> { props.message } </div>

          <div>

        <button>Like</button>  {props.likesCount}
      </div>
    </div>
  )
}

export default Post;