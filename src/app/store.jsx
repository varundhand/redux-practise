// we need to add the reducer/slices here once we declared them 

import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer
  }
})