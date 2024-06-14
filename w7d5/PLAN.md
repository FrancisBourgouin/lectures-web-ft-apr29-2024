# Quiz App!

View multiple questions, and answer them one at a time, and say wow when we have the right answer

- What is the hottest planet in the solar system? Venus
- What is the capital of Toronto? T
- What is the powerhouse of the cell ? Mitochondria
- How many stomachs do cows have? 4

Should we move sequentially or randomly? Randomly

# Data Structures

## GameStats

```jsx
const gameStats = {
  currentIndex: 0,
  correctAnswers: 0,
  totalAnswers: 0,
};
```

## Question

```jsx
const question = {
  id: "1",
  prompt: "",
  answer: "",
};
```

## Questions (QuestionList)

```jsx
const questions = [question, question]; 
const questions = { 1: question, 2: question }; // Easy to target a specific question, easy to modify
```

## Mode

```jsx
const mode = "QUIZ" | "ADD";
```

# HTML Structure

- body
  - header
    - Super Quiz of Destiny
  - main
    - section
      - score
      - total answered
    - form (answer question)
      - p prompt
      - input answer
      - button
    - form (add a question)
      - input prompt
      - input answer
      - button

# Component Structure

- App
  - Header
  - Results
  - QuizForm
  - QuestionForm
