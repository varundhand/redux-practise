import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";  // generates a random id like uuid
import React from 'react'

import { postAdded } from "../features/posts/postsSlice";

const AddPostsForm = () => {
  const dispatch = useDispatch()
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')

  const onTitleChanged = (e) => {setTitle(e.target.value)}
  const onContentChanged = (e) => {setContent(e.target.value)}

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id:nanoid(), // it gives id, title and content
          title,
          content
        })
      )
      setTitle('') // setTitle and setContent back to empty string once post is saved
      setContent('')
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form action="">
        <label htmlFor="postTitle">Post Title: </label>
        <input 
          type="text" 
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content: </label>
        <textarea 
          id="postContent" 
          cols="30" rows="10"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button 
          type="button"
          onClick={onSavePostClicked}
        >Post Save</button>
      </form>
    </section>
  )
}

export default AddPostsForm
