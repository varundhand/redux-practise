import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "../features/posts/postsSlice";
import PostAuthor from "./PostAuthor";
import React from "react";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  // const posts = useSelector(state => state.posts)
  const posts = useSelector(selectAllPosts); //! key state which is passed as a prop to other components

  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date)) // b.date before a.date so that descending order is returned
  // 'slice' retuns a shallow copy of the array

  const renderedPosts = orderedPosts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date}/>
        </p>
        <ReactionButtons post={post}/>
      </article>
    );
  });

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
