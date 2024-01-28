import {useEffect, useContext} from 'react';
import {tokenContext} from '../context/tokenContext';
import {URL_API} from '../api/const';


export const useCommentsData = (id) => {
  const {token} = useContext(tokenContext);
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/r/redditdev/comments/${id}`, {
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
        console.log('data: ', data);
      }, [token]);
  });
};

