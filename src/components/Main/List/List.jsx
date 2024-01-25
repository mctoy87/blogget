import style from './List.module.css';
import Post from './Post';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {useToken} from '../../../hooks/useToken';
import {URL_API} from '../../../api/const';


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

  // const {token} = useContext(tokenContext);
  const [token] = useToken();
  console.log('token: ', token);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({data}) => {
        console.log(data);
        data.children.map((item) => {
          const title = item.data.title;
          console.log('title: ', title);
        });
        setPosts({children: 'POST$!!!'});
        console.log(posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);

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

