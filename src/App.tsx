import { useState } from "react";
import "./App.css";

import chibi from "./assets/chibi.png";

import { questions } from "./data/question";

import StartScreen from "./components/startScreen";
import QuizScreen from "./components/quizScreen";
import ResultScreen from "./components/resultScreen";

function App() {
  const [start, setStart] = useState(false);
  const [result, setResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const current = questions[currentQuestion];

  function handleStart() {
    setStart(true);
  }

  function handleAnswer(answerScore: number) {
    const newScore = score + answerScore;

    setScore(newScore);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setResult(true);
    }
  }

  function handleRestart() {
    setStart(false);
    setResult(false);
    setCurrentQuestion(0);
    setScore(0);
  }

  // Result information
  let resultTitle = "";
  let resultDescription = "";
  let resultAdvice = "";
  let resultClass = "";

  if (score >= 26) {
    resultTitle = "😇 The Gentle Soul";
    resultDescription =
      "You have a lot of patience and a genuinely kind heart. You forgive people more easily than most.";
    resultAdvice =
      "Keep your kindness, but remember to protect yourself too.";
    resultClass = "gentle-soul";
  } else if (score >= 20) {
    resultTitle = "🐻 The Caring Bear";
    resultDescription =
      "You are thoughtful, caring, and always willing to help others. Your kindness usually wins.";
    resultAdvice =
      "Keep caring for others, but don't forget to care for yourself.";
    resultClass = "caring-bear";
  } else if (score >= 15) {
    resultTitle = "🐺 The Calm Spirit";
    resultDescription =
      "You stay patient when it matters and know when to give people a little understanding.";
    resultAdvice =
      "Stay calm, speak honestly, and choose your battles wisely.";
    resultClass = "calm-spirit";
  } else {
    resultTitle = "😈 The Honest Heart";
    resultDescription =
      "You have a good heart, but your patience definitely has a limit. People usually know when they push it.";
    resultAdvice =
      "Take a breath before reacting. Not everything deserves your energy.";
    resultClass = "honest-heart";
  }

  return (
    <div className="app">
      <div className="quiz-container">

        <h1>Personality check</h1>

        {result ? (
          <ResultScreen
            resultTitle={resultTitle}
            resultDescription={resultDescription}
            resultAdvice={resultAdvice}
            resultClass={resultClass}
            chibi={chibi}
            onRestart={handleRestart}
          />
        ) : start ? (
          <QuizScreen
            current={current}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        ) : (
          <StartScreen onStart={handleStart} />
        )}

      </div>
    </div>
  );
}

export default App;