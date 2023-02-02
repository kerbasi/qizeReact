import { ProgressBar } from "./ProgressBar";
import { Question } from "./Question";
import { Answers } from "./Answers";
import { useGlobalContext } from "../appContext";

export const Quiz = () => {
  const { length, questionNumber } = useGlobalContext();
  const renderQuestion = questionNumber < length;
  const width = `${(questionNumber / length) * 100}%`;
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
