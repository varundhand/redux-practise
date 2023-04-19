import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import React from 'react'

import { postAdded } from "../features/posts/postsSlice";
import { selectAllUsers } from "../features/users/usersSlice";

const AddPostsForm = () => {
  const dispatch = useDispatch()

  const [title,setTitle] = useState('') // these are temporary states that we track in the component and then pass along data to the global state
  const [content,setContent] = useState('')
  const [userId,setUserId] = useState('')

  const users = useSelector(selectAllUsers)

  const onTitleChanged = (e) => {setTitle(e.target.value)}
  const onContentChanged = (e) => {setContent(e.target.value)}
  const onAuthorChanged = (e) => {setUserId(e.target.value)}

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        // postAdded({ // we can handle this formating login in our slice through prepare callback
        //   id:nanoid(), // it gives id, title and content
        //   title,
        //   content
        // })
        postAdded(title,content,userId) // the strucutre of data is already formatted in slice through prepare callback
      )
      setTitle('') // setTitle and setContent back to empty string once post is saved
      setContent('')
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const userOptions = users.map(user => {
    return (
      <option value={user.id} key={user.id}>
        {user.name}
      </option>
    )
  }) 

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

        <label htmlFor="postAuthor">Author: </label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {userOptions}
        </select>

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
          disabled={!canSave} // if all the values are available 
        >Post Save</button>
      </form>
    </section>
  )
}

export default AddPostsForm
