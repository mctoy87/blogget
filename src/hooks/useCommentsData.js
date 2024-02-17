
import {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {commentsDataRequestAsync} from '../store/commentsData/action';


export const useCommentsData = (id) => {
  const commentsData = useSelector(state => state.commentsData.data);
  const status = useSelector((state => state.commentsData.status));
  const error = useSelector((state => state.commentsData.error));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsDataRequestAsync(id));
  }, []);

  return [commentsData, status, error];
};

