import React, { useState } from "react";

export const LikeButton = (props) => {
  const [likes, setLikes] = useState(0);

  const addingLike = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <p>{likes} Likes</p>
      <button onClick={addingLike}>Like</button>
    </>
  );
};
