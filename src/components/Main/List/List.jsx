import style from './List.module.css';
import Post from './Post';
import PropTypes from 'prop-types';

export const List = () => {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'Nickname',
    // рейтинг
    ups: 24,
    // дата в формате ISO с сервера
    date: '2022-02-24T09:45:00.00Z',
  };

  return (
    <ul className={style.list}>
      <Post postData={postData}/>
    </ul>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};

