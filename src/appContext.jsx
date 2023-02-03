import { useContext, createContext, useState, useEffect } from "react";
// import questions from "./components/dataRu";

const appContext = createContext();

const AppContext = ({ children }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [local, setLocal] = useState(navigator.language);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (local.includes("ru")) {
      import("./components/dataRu").then((data) => {
        console.log(data);
        setQuestions(data.default);
      });
    } else {
      import("./components/dataEn").then((data) => setQuestions(data.default));
    }
  }, [local]);

  return (
    <appContext.Provider
      value={{
        questionNumber,
        setQuestionNumber,
        score,
        setScore,
        data: questions[questionNumber],
        length: questions.length,
        local,
        setLocal,
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
