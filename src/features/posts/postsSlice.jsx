import { createSlice,nanoid } from "@reduxjs/toolkit";

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
    postAdded: {
      reducer(state,action){  // we use PREPARE callback to generate unique ids, format data, return object with payload, etc
      state.push(action.payload) // payload is the form data we dispatch the action  //! state.push works only within slice and it doesnt actually mutate the array
      },
      prepare(title,content){
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        }
      }
  }
  }
})

export const selectAllPosts = (state) => state.posts // we created a selector in the slice itself and then exported it; So now if the shape of the state changes we wont have to go through each component to change it 

export const {postAdded} = postsSlice.actions

export default postsSlice.reducer