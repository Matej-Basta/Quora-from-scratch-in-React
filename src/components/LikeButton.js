import React, { useState } from "react";

export const LikeButton = (props) => {
  //state that tracks the number of likes
  const [likes, setLikes] = useState(0);

  //function that adds 1 like
  const addingLike = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      {/* creating a "likes" elements */}
      <p>{likes} Likes</p>
      <button onClick={addingLike}>Like</button>
    </>
  );
};
