import { useContext, createContext, useState } from "react";

const questions = [
  {
    question: "How are you?",
    answers: ["Ok", "Not now", "Fine", "Later"],
  },
];

const appContext = createContext();

const AppContext = ({ children }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const data = questions[questionNumber];
  return (
    <appContext.Provider value={{ questionNumber, setQuestionNumber, data }}>
      {children}
    </appContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(appContext);
};

export default AppContext;

export { useGlobalContext };
