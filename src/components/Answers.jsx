import { Answer } from "./Answer";
import { useGlobalContext } from "../appContext";

export const Answers = () => {
  const { data, score, setScore, questionNumber, setQuestionNumber } =
    useGlobalContext();
  const answers = data.answers;

  const handleClickAnswer = (value) => {
    if (value) {
      setScore(score + 1);
    }
    setQuestionNumber(questionNumber + 1);
    console.log(questionNumber);
  };

  return (
    <div className='quiz-card__answer-container'>
      {answers.map((answer) => {
        return (
          <Answer
            key={answer.id}
            value={answer.value}
            handleClickAnswer={handleClickAnswer}
          >
            {answer.text}
          </Answer>
        );
      })}
    </div>
  );
};
