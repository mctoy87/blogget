import style from './Post.module.css';
import PropTypes from 'prop-types';
import Time from './Time/Time';
import {Rating} from './Rating/Rating';
import {UserPhoto} from './UserPhoto/UserPhoto';
import {ReactComponent as DeleteSvg} from './img/delete.svg';
import {Content} from './Content/Content';

export const Post = ({postData}) => {
  const {title, author, ups, date, thumbnail, id} = postData;

  return (
    <li className={style.post}>
      <UserPhoto title={title} thumbnail={thumbnail}/>

      <Content title={title} author={author} id={id}></Content>

      <Rating ups={ups} />

      <Time date={date} />

      <button className={style.delete}>
        <DeleteSvg/>
      </button>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
