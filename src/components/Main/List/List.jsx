import style from './List.module.css';
import Post from './Post';
import PropTypes from 'prop-types';


export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      // рейтинг
      ups: 77,
      // дата в формате ISO с сервера
      date: '2022-01-21T04:22:00.00Z',
      id: '123'
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      // рейтинг
      ups: 24,
      // дата в формате ISO с сервера
      date: '2022-01-31T00:00:00.00Z',
      id: '456'
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      // рейтинг
      ups: 58,
      // дата в формате ISO с сервера
      date: '2022-02-24T09:45:00.00Z',
      id: '789'
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      // рейтинг
      ups: 124,
      // дата в формате ISO с сервера
      date: '2022-03-10T08:00:00.00Z',
      id: '234'
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postData) => (
        <Post key={postData.id} postData={postData}/>
      ))}
    </ul>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};

