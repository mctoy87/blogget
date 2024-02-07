import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

export const usePosts = () => {
  const token = useSelector(state => state.token);
  const [posts, setPosts] = useState([]);


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
        const array = [];
        data.children.map((item) => {
          const {
            title,
            author,
            id,
            ups,
            selftext: markdown,
            thumbnail,
            url,
            created: date,
          } = item.data;

          array.push({title, author, id, ups, markdown, thumbnail, url, date});
        });
        setPosts(array);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);

  return [posts, setPosts];
};
