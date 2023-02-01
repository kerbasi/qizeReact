import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { Question } from "./Question";
import { Answers } from "./Answers";
import { useGlobalContext } from "../appContext";

export const Quiz = () => {
  const [width, setWidth] = useState("20%");

  const { data, questionNumber } = useGlobalContext();
  const question = data.question;
  const answers = data.answers;
  return (
    <div className='quiz-card'>
      <ProgressBar width={width} />
      <Question question={question} />
      <Answers answers={answers} />
    </div>
  );
};
