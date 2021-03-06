import { LikeButton } from "./LikeButton.js";
import { Comment } from "./Comment.js";
import React, { useState } from "react";

export const Answer = (props) => {
  //state that keeps a track of an array of comments
  const [comments, setComments] = useState([]);

  //constants that create React state for nick and comments
  const [nick, setNick] = useState("");
  const [comment, setComment] = useState("");

  return (
    <>
      {/* creating an answer in a list item  */}
      <li>
        {props.nick}: {props.answer}
      </li>
      {/* appending like button  */}
      <LikeButton />
      {/* creating a list of comments  */}
      <ul>
        {comments.map((element, index) => (
          <Comment key={index} nick={element.nick} comment={element.comment} />
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newArray = comments.concat({ nick: nick, comment: comment });
          setComments(newArray);
          setNick("");
          setComment("");
        }}
      >
        <input
          type="text"
          name="nick"
          placeholder="nick"
          value={nick}
          onChange={(e) => setNick(e.target.value)}
        ></input>
        <br />
        <textarea
          placeholder="Write your answer"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <br />
        <button>Write a comment</button>
      </form>
    </>
  );
};
