import { useContext, createContext, useState, useEffect } from "react";

const questions = [
  {
    question: "How are you?",
    answers: [
      { text: "Ok", value: false, id: 0 },
      { text: "Not now", value: false, id: 1 },
      { text: "Fine", value: true, id: 2 },
      { text: "Later", value: false, id: 3 },
    ],
    resultTextFault: "right answer is ...",
    resultTextRight: "your right, it's ...",
  },
  {
    question: "How are you now?",
    answers: [
      { text: "Ok", value: false, id: 0 },
      { text: "Not now", value: false, id: 1 },
      { text: "Fine", value: true, id: 2 },
      { text: "Later", value: false, id: 3 },
    ],
    resultTextFault: "right answer is ...",
    resultTextRight: "your right, it's ...",
  },
  {
    question: "How are you now?",
    answers: [
      { text: "Ok", value: false, id: 0 },
      { text: "Not now", value: false, id: 1 },
      { text: "Fine", value: true, id: 2 },
      { text: "Later", value: false, id: 3 },
    ],
    resultTextFault: "right answer is ...",
    resultTextRight: "your right, it's ...",
  },
  {
    question: "How are you now?",
    answers: [
      { text: "Ok", value: false, id: 0 },
      { text: "Not now", value: false, id: 1 },
      { text: "Fine", value: true, id: 2 },
      { text: "Later", value: false, id: 3 },
    ],
    resultTextFault: "right answer is ...",
    resultTextRight: "your right, it's ...",
  },
  {
    question: "How are you now?",
    answers: [
      { text: "Ok", value: false, id: 0 },
      { text: "Not now", value: false, id: 1 },
      { text: "Fine", value: true, id: 2 },
      { text: "Later", value: false, id: 3 },
    ],
    resultTextFault: "right answer is ...",
    resultTextRight: "your right, it's ...",
  },
];

const appContext = createContext();

const AppContext = ({ children }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <appContext.Provider
      value={{
        questionNumber,
        setQuestionNumber,
        score,
        setScore,
        data: questions[questionNumber],
        length: questions.length,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(appContext);
};

export default AppContext;

export { useGlobalContext };
