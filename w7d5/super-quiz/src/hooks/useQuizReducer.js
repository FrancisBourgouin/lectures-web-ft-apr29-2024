import { useReducer, useState } from "react";

export default function useQuizReducer(initialQuestions) {
  const initialState = {
    questions: initialQuestions,
    stats: {
      currentIndex: 0,
      correctAnswers: 0,
      totalAnswers: 0,
    },
  };
  const quizReducer = (state, action) => {
    // Action contains two things!
    // action.type => "ADD_QUIZ_QUESTION" | "UPDATE_GOOD_ANSWER" | "UPDATE_BAD_ANSWER"
    // action.payload => Information needed to complete the action

    switch (action.type) {
      case "ADD_QUIZ_QUESTION":
        const updatedQuestion = {
          id: state.questions.length + 1,
          question: action.payload.question,
          answer: action.payload.answer,
        };
        const updatedQuestions = [...state.questions, updatedQuestion];

        return { ...state, questions: updatedQuestions };

      case "UPDATE_GOOD_ANSWER":
        return {
          ...state,
          stats: {
            currentIndex: Math.floor(Math.random() * state.questions.length),
            correctAnswers: state.stats.correctAnswers + 1,
            totalAnswers: state.stats.totalAnswers + 1,
          },
        };

      case "UPDATE_BAD_ANSWER":
        return {
          ...state,
          stats: {
            currentIndex: Math.floor(Math.random() * state.questions.length),
            correctAnswers: state.stats.correctAnswers,
            totalAnswers: state.stats.totalAnswers + 1,
          },
        };
    }
  };

  const [state, dispatch] = useReducer(quizReducer, initialState);

  // dispatch({type:"UPDATE_GOOD_ANSWER"})
  // dispatch({type:"UPDATE_BAD_ANSWER"})
  // dispatch({type:"ADD_QUIZ_QUESTION"})

  const currentQuestion = state.questions[state.stats.currentIndex];

  const quizInfo = {
    currentPercentage:
      Math.round((state.stats.correctAnswers / state.stats.totalAnswers) * 100) + "%",
    amountAnswered: state.stats.totalAnswers,
    questionPrompt: currentQuestion.question,
  };

  const addQuestion = (formData) =>
    dispatch({ type: "ADD_QUIZ_QUESTION", payload: formData });

  const answerQuestion = (formData) => {
    if (formData.answer === currentQuestion.answer) {
      dispatch({ type: "UPDATE_GOOD_ANSWER" });
    } else {
      dispatch({ type: "UPDATE_BAD_ANSWER" });
    }
  };

  return { quizInfo, addQuestion, answerQuestion };
}
