import { useDispatch } from "react-redux";
import { reactionAdded } from "../features/posts/postsSlice";
import React from 'react'

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕'
}

const ReactionButtons = ({post}) => {
  const dispatch = useDispatch()
  const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji]) => { // mapping over an object
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() => dispatch(reactionAdded({postId: post.id, reaction: name}))}
        >
          {emoji}{post.reactions[name]}
      </button>
    )
  })

  return <div>{reactionButtons}</div>
}

export default ReactionButtons
