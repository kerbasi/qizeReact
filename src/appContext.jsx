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
  },
  {
    question: "How are you now?",
    answers: [
      { text: "Ok", value: false, id: 0 },
      { text: "Not now", value: false, id: 1 },
      { text: "Fine", value: true, id: 2 },
      { text: "Later", value: false, id: 3 },
    ],
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
        data: questions[questionNumber],
        score,
        setScore,
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
