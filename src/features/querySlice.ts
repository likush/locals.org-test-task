import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../stores/store';

export const querySlice = createSlice({
  name: 'query',
  initialState: {
    value: '',
    selectedUser: {},
  },
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    clear: state => {
      state.value = '';
    },
  },
});

export const {setValue, clear} = querySlice.actions;
export const selectQuery = (state: RootState) => state.query.value;

export default querySlice;
