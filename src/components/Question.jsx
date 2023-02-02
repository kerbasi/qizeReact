import { useGlobalContext } from "../appContext";

export const Question = () => {
  const { data } = useGlobalContext();
  const question = data.question;

  return (
    <div className='quiz-card__question-container'>
      <p className='quiz-card__question'>{question}</p>
    </div>
  );
};
