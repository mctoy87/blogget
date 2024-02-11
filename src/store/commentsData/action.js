export const COMMENTS_DATA_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_DATA_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_DATA_REQUEST_ERROR = 'COMMENTS_DATA_REQUEST_ERROR';


export const commentsRequest = () => ({
  type: COMMENTS_DATA_REQUEST,
});

export const commentsRequestSuccess = (data) => ({
  type: COMMENTS_DATA_REQUEST_SUCCESS,
  data,
});

export const commentsRequestError = (error) => ({
  type: COMMENTS_DATA_REQUEST_ERROR,
  error,
});
