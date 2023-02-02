import { ProgressBar } from "./ProgressBar";
import { Question } from "./Question";
import { Answers } from "./Answers";
import { useGlobalContext } from "../appContext";
import { useState } from "react";
import { Result } from "./Result";
import { Button } from "./Button";
import { Final } from "./Final";

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
      <ProgressBar
        width={width}
        questionNumber={questionNumber}
        length={length}
      />
      {renderQuestion && (
        <>
          <Question />
          {!showResult && <Answers setShowResult={setShowResult} />}
          {showResult && (
            <>
              <Result value={value} text={text} />
              <Button handleClickButton={handleClickNextButton}>
                {questionNumber + 1 < length ? `Next question` : `Show results`}
              </Button>
            </>
          )}
        </>
      )}
      {!renderQuestion && (
        <Final
          score={score}
          length={length}
          handleClickNewButton={handleClickNewButton}
        />
      )}
    </div>
  );
};
