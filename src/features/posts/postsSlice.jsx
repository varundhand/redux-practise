import { createSlice,nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",  
    date: sub(new Date(), {minutes: 10}).toString(), // subtract 10 minutes from the current time
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
},
{
    id: '2',
    title: 'Slices...',
    content: "The more I say slice, the more I want pizza.", 
    date: sub(new Date(), {minutes: 5}).toString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
}
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state,action){  
      state.push(action.payload) // payload is the form data we dispatch the action  //! state.push works only within slice and it doesnt actually mutate the array
      },
      prepare(title,content,userId){ // we use PREPARE callback to generate unique ids, format data, return object with payload, etc
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          }
        }
      }
  },
    reactionAdded(state,action) {
      const {postId, reaction} = action.payload
      const existingPost = state.find(post => post.id === postId)
      if (existingPost){
        existingPost.reactions[reaction]++
      }
    }
  }
})

export const selectAllPosts = (state) => state.posts // we created a selector in the slice itself and then exported it; So now if the shape of the state changes we wont have to go through each component to change it 

export const {postAdded,reactionAdded} = postsSlice.actions

export default postsSlice.reducer