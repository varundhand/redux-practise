import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: 0, name: 'Micheal Scott'},
  {id: 1, name: 'Dwight Schrute'},
  {id: 2, name: 'Jim Halpert'},
]

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export const selectAllUsers = state => state.users

export default usersSlice.reducer