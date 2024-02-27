import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
  error: '',
  after: '',
  isLast: false,
  page: '',
  andrei: 'kotelnikov',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsRequest: (state) => {
      state.loading = true;
      state.error = '';
      state.isLast = false;
    },
    postsRequestSuccess: (state, action) => {
      state.posts = action.payload.posts;
      state.loading = false;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    postsRequestSuccessAfter: (state, action) => {
      state.posts = [...state.action.posts, ...action.action.posts];
      state.loading = false;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    postsRequestError: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    changePage: (state, action) => {
      state.page = action.payload.page;
      state.after = '';
      state.isLast = false;
    },
  },
});

export default postsSlice.reducer;
console.log('postsSlice: ', postsSlice);
console.log('postsSlice.getInitialState(): ', postsSlice.getInitialState());
