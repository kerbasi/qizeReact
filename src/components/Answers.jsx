import { Button } from "./Button";
import { useGlobalContext } from "../appContext";

export const Answers = ({ setShowResult }) => {
  const { data, score, setScore, questionNumber, setQuestionNumber } =
    useGlobalContext();
  const answers = data.answers;

  const handleClickAnswer = (value) => {
    if (value) {
      setShowResult("right");
      setScore(score + 1);
    } else {
      setShowResult("wrong");
    }
  };

  return (
    <div className='quiz-card__answer-container'>
      {answers.map((answer) => {
        return (
          <Button
            key={answer.id}
            value={answer.value}
            handleClickButton={handleClickAnswer}
          >
            {answer.text}
          </Button>
        );
      })}
    </div>
  );
};
