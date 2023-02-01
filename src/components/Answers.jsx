import { Answer } from "./Answer";
export const Answers = ({ answers }) => {
  return (
    <div className='quiz-card__answer-container'>
      {answers.map((answer, i) => {
        return <Answer key={i}>{answer}</Answer>;
      })}
    </div>
  );
};
