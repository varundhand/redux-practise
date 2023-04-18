import { useSelector,useDispatch } from "react-redux";
import { selectAllPosts } from "../features/posts/postsSlice";
import React from 'react'

const PostsList = () => {
  // const posts = useSelector(state => state.posts)
  const posts = useSelector(selectAllPosts)
  const renderedPosts = posts.map(post => {
    return(
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0,100)}</p> 
    </article>
    )
  })

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList
