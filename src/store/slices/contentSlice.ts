import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { ContentData } from '../../types';
import { fetchSitePayload } from '../../api/contentApi';

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

interface ContentState {
  data: ContentData | null;
  status: Status;
  error: string | null;
}

const initialState: ContentState = {
  data: null,
  status: 'idle',
  error: null,
};

export const loadContent = createAsyncThunk<ContentData>(
  'content/loadAll',
  async () => fetchSitePayload()
);

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadContent.pending,   (state) => { state.status = 'loading'; state.error = null; })
      .addCase(loadContent.fulfilled, (state, action) => { state.status = 'succeeded'; state.data = action.payload; })
      .addCase(loadContent.rejected,  (state, action) => { state.status = 'failed';  state.error = action.error.message ?? 'Failed to load content'; });
  },
});

export default contentSlice.reducer;
