import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Question } from "./components/Question";

function App() {
  //hardcoded array of initial questions
  const [questions, setQuestions] = useState([
    { nick: "vasek", text: "Why is the sky blue?" },
    { nick: "roman", text: "When will G.R.R. Martin finish the sixth book?" },
    { nick: "kamil", text: "Is LeBron the GOAT?" },
    { nick: "lukas", text: "How to learn React in one month?" },
    { nick: "tomas", text: "What framework should I use for PHP backend?" },
  ]);

  //constants that create React states for nick and question inputs
  const [nick, setNick] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      {/* creating a form that pushes new question into the array when submitted */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newArray = questions.concat({ nick: nick, text: text });
          setQuestions(newArray);
          setNick("");
          setText("");
        }}
      >
        <input
          type="text"
          name="nick"
          value={nick}
          placeholder="nick"
          onChange={(e) => {
            setNick(e.target.value);
          }}
        ></input>
        <br />
        <textarea
          value={text}
          placeholder="Write your quesiton"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <br />
        <button>Ask a question</button>
      </form>

      {/* rendering a new question for every object in an array */}
      {questions.map((question, index) => (
        <Question key={index} nick={question.nick} text={question.text} />
      ))}
    </>
  );
}

export default App;
