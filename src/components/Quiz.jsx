import { ProgressBar } from "./ProgressBar";
import { Question } from "./Question";
import { Answers } from "./Answers";
import { useGlobalContext } from "../appContext";
import { useState } from "react";
import { Result } from "./Result";
import { Button } from "./Button";

export const Quiz = () => {
  const { length, questionNumber, setQuestionNumber, setScore, data, score } =
    useGlobalContext();
  const [showResult, setShowResult] = useState(false);
  const renderQuestion = questionNumber < length;
  const width = `${(questionNumber / length) * 100}%`;
  const value = showResult === "right" ? true : false;
  let text = "";
  if (data) {
    text = value ? data.resultTextRight : data.resultTextFault;
  }

  const handleClickNextButton = () => {
    setQuestionNumber(questionNumber + 1);
    setShowResult("");
  };

  const handleClickNewButton = () => {
    setQuestionNumber(0);
    setShowResult("");
    setScore(0);
  };

  return (
    <div className='quiz-card'>
      <ProgressBar width={width} />
      {renderQuestion && (
        <>
          <Question />
          {!showResult && <Answers setShowResult={setShowResult} />}
          {showResult && (
            <>
              <Result value={value} text={text} />
              <Button handleClickButton={handleClickNextButton}>
                Next question
              </Button>
            </>
          )}
        </>
      )}
      {!renderQuestion && (
        <>
          <div className='quiz-card__final-result'>
            You've got: {score} right {score === 1 ? `answer` : `answers`} from{" "}
            {`${length}`}!{" "}
            {score / length >= 0.6
              ? `It's good enough!`
              : `You could do better!`}
          </div>
          <Button handleClickButton={handleClickNewButton}>Start again</Button>
        </>
      )}
    </div>
  );
};
