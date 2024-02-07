import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';


export const useCommentsData = (id) => {
  const token = useSelector(state => state.token);
  const [commentsData, setCommentsData] = useState([]);

  const getComments = () => {
    console.log('Loading message...');

    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(
        ([
          {
            data: {
              children: [{data: post}],
            },
          },
          {
            data: {
              children,
            },
          },
        ]) => {
          const comments = children.map(item => item.data);

          setCommentsData([post, comments]);
        },
      )
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getComments();
  }, []);

  return [commentsData];
};

