import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { ContentData } from '../../types';
import rawContent from '../../data/content.json';

const content = rawContent as ContentData;

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

interface ContentState {
  data: ContentData | null;
  status: Status;
  error: string | null;
}

const initialState: ContentState = {
  data: content, // Initialize with data directly if possible, or via thunk
  status: 'idle',
  error: null,
};

export const loadContent = createAsyncThunk<ContentData>(
  'content/loadAll',
  async () => {
    // Simulate async load if needed, or just return the imported content
    return new Promise((resolve) => {
      setTimeout(() => resolve(content), 100);
    });
  }
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
