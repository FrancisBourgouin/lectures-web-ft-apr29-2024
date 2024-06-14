// .reduce()

// .map()

// Reducer pattern!


// STATE


// REDUCER FCT


// NEW STATE

// update the state when they have good answer
// update the state when they have bad answer
// update the state with new questions


"ADD_QUIZ_QUESTION"
"UPDATE_GOOD_ANSWER"
"UPDATE_BAD_ANSWER"

const initialState = {
  questions: [],
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

// const newState = quizReducer(initialState, {type:"UPDATE_GOOD_ANSWER", payload:null})
// const newState = quizReducer(initialState, {type:"UPDATE_BAD_ANSWER", payload:null})
const newState = quizReducer(initialState, {type:"ADD_QUIZ_QUESTION", payload:{question:"What??", answer:"WAAAAT!"}})
console.log(newState)