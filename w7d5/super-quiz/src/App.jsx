import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Results from "./components/Results";
import QuestionForm from "./components/QuestionForm";
import QuizForm from "./components/QuizForm";
import { questionArr } from "./data/quizData";
import useMode from "./hooks/useMode";
import useQuiz from "./hooks/useQuiz";
import useQuizReducer from "./hooks/useQuizReducer";

function App() {
  const { mode, toggleMode } = useMode("QUIZ");
  // const { addQuestion, answerQuestion, quizInfo } = useQuiz(questionArr);

  const { addQuestion, answerQuestion, quizInfo } = useQuizReducer(questionArr);

  // correctAnswers, question prompt, amountOfAnswers

  


  return (
    <>
      <Header toggleMode={toggleMode} mode={mode} />
      <main>
        <Results {...quizInfo} />
        {mode === "ADD" && <QuestionForm onSubmit={addQuestion} />}
        {mode === "QUIZ" && (
          <QuizForm question={quizInfo.questionPrompt} onSubmit={answerQuestion} />
        )}
      </main>
    </>
  );
}

export default App;
