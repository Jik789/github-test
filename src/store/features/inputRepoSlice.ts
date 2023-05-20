import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface inputRepoState {
  inputName: string;
  inputPage: string;
}

const initialState: inputRepoState = {
  inputName: localStorage.getItem('searchInput') ?? '',
  inputPage: localStorage.getItem('currentPage') ?? '1',
};

export const inputRepoSlice = createSlice({
  name: 'inputRepo',
  initialState,
  reducers: {
    inputName: (state, action: PayloadAction<string>) => {
      state.inputName = action.payload;
    },
    inputPage: (state, action: PayloadAction<string>) => {
      state.inputPage = action.payload;
    },
  },
});

export const { inputName, inputPage } = inputRepoSlice.actions;

export default inputRepoSlice.reducer;
