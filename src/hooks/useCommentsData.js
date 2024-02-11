import axios from 'axios';
import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {
  commentsRequest,
  commentsRequestSuccess,
  commentsRequestError,
} from '../store/commentsData/action';


export const useCommentsData = (id) => {
  const token = useSelector(state => state.tokenReducer.token);
  console.log('token: ', token);
  // const store = useStore();
  // const commentsData = store.getState().commentsData.data;
  // console.log('value: ', commentsData);
  // console.log('store: ', store);
  // console.warn('!!!', Object.keys(commentsData).length !== 0);

  // const commentsData = useSelector(state => state.commentsData.data)
  const [commentsData, setCommentsData] = useState([]);
  const dispatch = useDispatch();
  console.log('dispatch: ', dispatch);

  useEffect(() => {
    if (!token) return;
    console.log('Loading message...');
    dispatch(commentsRequest());

    axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(
        ({data: [
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
        ]}) => {
          const comments = children.map(item => item.data);
          console.log('comments: ', comments);
          const data = [post, comments];
          console.warn('data: ', data);
          setCommentsData(data);
          setCommentsData([post, comments]);

          dispatch(commentsRequestSuccess(data));
        },
      )
      .catch((err) => {
        console.error(err);
        dispatch(commentsRequestError(err.toString()));
      });
  }, []);

  return [commentsData];
};

