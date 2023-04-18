import { createSlice } from "@reduxjs/toolkit";

const intitialState = [
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

export const postsSlice = createSlice()