import { useState } from "react";

export default function useQuiz(initialQuestions) {
  const [questions, setQuestions] = useState(initialQuestions);
  const [gameStats, setGameStats] = useState({
    currentIndex: 0,
    correctAnswers: 0,
    totalAnswers: 0,
  });

  const currentQuestion = questions[gameStats.currentIndex];

  const addQuestion = (formData) => {
    const { question, answer } = formData;
    const id = questions.length + 1;

    const newQuestion = { id, question, answer };

    setQuestions([...questions, newQuestion]);
  };

  const answerQuestion = (formData) => {
    const { answer } = formData;
    const isRightAnswer = answer === currentQuestion.answer;

    const newIndex = Math.floor(Math.random() * questions.length); // ( gameStats.currentIndex + 1 ) % questions.length
    const newCorrectAnswers = isRightAnswer
      ? gameStats.correctAnswers + 1
      : gameStats.correctAnswers;
    const newTotalAnswers = gameStats.totalAnswers + 1;

    setGameStats({
      currentIndex: newIndex,
      correctAnswers: newCorrectAnswers,
      totalAnswers: newTotalAnswers,
    });
  };

  const quizInfo = {
    currentPercentage: Math.round(gameStats.correctAnswers / gameStats.totalAnswers * 100) + "%",
    amountAnswered: gameStats.totalAnswers,
    questionPrompt: currentQuestion.question,
  };

  return { addQuestion, answerQuestion, quizInfo };
}
