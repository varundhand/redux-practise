import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => {
    return user.id === parseInt(userId); 
  });
  return <span>by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
