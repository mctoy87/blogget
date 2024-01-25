import {useEffect} from 'react';

import {URL_API} from '../api/const';
// import {tokenContext} from '../context/tokenContext';
import {useToken} from './useToken';

export const usePosts = () => {
  const [token] = useToken();
  // const {token} = useContext(tokenContext);
  console.log('token: ', token);
  // const [posts, setPosts] = useState({});

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
      .then(({count, show}) => {
        console.log(count);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);
};
