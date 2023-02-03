import { useContext, createContext, useState, useEffect } from "react";
import questions from "./components/dataRu";

const appContext = createContext();

const AppContext = ({ children }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [local, setLocal] = useState("en-US");

  useEffect(() => {
    setLocal(navigator.language);
  }, []);

  // if (local.includes("eu")) {
  //   import("./components/dataEn").then(questions);
  // }

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
