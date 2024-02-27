import {createSlice} from '@reduxjs/toolkit';
import {commentsDataRequestAsync} from './commentsAction';

const initialState = {
  status: 'loading',
  data: [],
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
  },

  extraReducers: builder => {
    builder
      .addCase(commentsDataRequestAsync.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(commentsDataRequestAsync.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload.data;
        state.error = '';
      })
      .addCase(commentsDataRequestAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error;
      });
  }
});

export default commentsSlice.reducer;
