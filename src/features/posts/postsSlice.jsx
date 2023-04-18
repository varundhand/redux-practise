import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",  
},
{
    id: '2',
    title: 'Slices...',
    content: "The more I say slice, the more I want pizza.", 
}
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state,action){
      state.push(action.payload) // payload is the form data we dispatch the action  //! state.push works only within slice and it doesnt actually mutate the array
    }
  }

})

export const selectAllPosts = (state) => state.posts // we created a selector in the slice itself and then exported it; So now if the shape of the state changes we wont have to go through each component to change it 

export const {postAdded} = postsSlice.actions

export default postsSlice.reducer