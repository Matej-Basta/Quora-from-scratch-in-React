import React, { useState } from "react";
import { Answer } from "./Answer";

export const Question = (props) => {
  //hardcoded array of answers (those get displayed under every question)
  const [answers, setAnswers] = useState([
    { nick: "radek", answer: "I don't know" },
    { nick: "mates", answer: "I do know, but I will not tell." },
  ]);

  //constants that create React states for nick and answer
  const [nick, setNick] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <>
      {/* returning text of the question with a nickname */}
      <h2>{props.text}</h2>
      <p>Nick: {props.nick}</p>

      {/* creating a list, where all the answers will be stored */}
      <ul>
        {/* generating answers */}
        {answers.map((answer, index) => (
          <Answer key={index} nick={answer.nick} answer={answer.answer} />
        ))}
      </ul>
      {/* form for creating new answers  */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newArray = answers.concat({ nick: nick, answer: answer });
          setAnswers(newArray);
          setNick("");
          setAnswer("");
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
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></textarea>
        <br />
        <button>Write an answer</button>
      </form>
    </>
  );
};
