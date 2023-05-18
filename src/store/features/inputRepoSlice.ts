import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface inputRepoState {
  value: string;
}

const initialState: inputRepoState = {
  value: '',
};

export const inputRepoSlice = createSlice({
  name: 'inputRepo',
  initialState,
  reducers: {
    inputRepoWrite: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { inputRepoWrite } = inputRepoSlice.actions;

export default inputRepoSlice.reducer;
