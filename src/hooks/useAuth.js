import {useEffect} from 'react';
import {URL_API} from '../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../store/tokenReducer';
import axios from 'axios';
import {
  authRequest,
  authRequestError,
  authRequestSuccess,
  authLogout,
} from '../store/auth/action';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    dispatch(authRequest());

    axios(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data: {name, icon_img: iconImg}}) => {
        const img = iconImg.replace(/\?.*$/, '');
        const data = {name, img};
        dispatch(authRequestSuccess(data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(deleteToken());
        dispatch(authRequestError(err.toString()));
      });
  }, [token]);

  const clearAuth = () => dispatch(authLogout());

  return [auth, clearAuth];
};
