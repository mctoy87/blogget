import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
  error: null,
  after: '',
  isLast: false,
  page: '',
  andrei: 'kotelnikov',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchRequest: (state) => {
      state.error = '';
      state.loading = true;
    },
    searchRequestSuccess: (state, action) => {
      console.log('action: ', action);
      state.posts = action.payload.children;
      state.loading = false;
      state.error = '';
      state.after = action.payload.after;
    },
    searchRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  searchRequest,
  searchRequestSuccess,
  searchRequestError
} = searchSlice.actions;

export default searchSlice.reducer;

