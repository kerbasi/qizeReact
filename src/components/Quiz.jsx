import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { Question } from "./Question";
import { Answers } from "./Answers";
import { useGlobalContext } from "../appContext";

export const Quiz = () => {
  const { width, renderQuestion } = useGlobalContext();
  console.log(renderQuestion, width);
  return (
    <div className='quiz-card'>
      <ProgressBar width={width} />
      {renderQuestion && (
        <div>
          <Question />
          <Answers />
        </div>
      )}
    </div>
  );
};
