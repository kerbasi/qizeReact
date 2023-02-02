import { useContext, createContext, useState } from "react";

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
];

const appContext = createContext();

const AppContext = ({ children }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const data = questions[questionNumber];
  return (
    <appContext.Provider
      value={{ questionNumber, setQuestionNumber, data, score, setScore }}
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
