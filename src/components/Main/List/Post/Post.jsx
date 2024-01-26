import style from './Post.module.css';
// import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
// import formatDate from '../../../../utils/formDate';
import Time from './Time/Time';
import {Rating} from './Rating/Rating';
import {UserPhoto} from './UserPhoto/UserPhoto';
import {Text} from '../../../../UI/Text';
import {ReactComponent as DeleteSvg} from './img/delete.svg';

export const Post = ({postData}) => {
  const {title, author, ups, date, thumbnail} = postData;

  return (
    <li className={style.post}>
      <UserPhoto title={title} thumbnail={thumbnail}/>

      <div className={style.content}>
        <Text As="h2" className={style.title}>
          <Text
            As="a"
            size={18}
            tsize={24}
            className={style.linkPost}
            href="#post"
          >
            {title}
          </Text>
        </Text>
        <Text
          As="a"
          size={12}
          tsize={14}
          color="orange"
          className={style.linkAuthor}
          href="#author"
        >
          {author}
        </Text>
      </div>

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
  // postData: PropTypes.array,
};
