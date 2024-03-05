import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './postsAction';

const initialState = {
  posts: [],
  loading: false,
  error: null,
  after: '',
  isLast: false,
  page: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // postsRequestSuccessAfter: (state, action) => {
    //   console.log('action.payload.posts: ', action.payload.posts);
    //   state.posts = [...state.posts, ...action.payload.posts.children];
    //   state.loading = false;
    //   state.error = '';
    //   state.after = action.payload.posts.after;
    //   state.isLast = !action.payload.posts.after;
    // },
    changePage: (state, action) => {
      state.page = action.payload.page;
      state.after = '';
      state.isLast = false;
      state.posts = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postsRequestAsync.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.isLast = false;
      })
      .addCase(postsRequestAsync.fulfilled, (state, action) => {
        state.posts.push(...action.payload.posts.children);
        state.loading = false;
        state.error = '';
        state.after = action.payload.posts.after;
        state.isLast = !action.payload.posts.after;
      })
      .addCase(postsRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default postsSlice.reducer;
