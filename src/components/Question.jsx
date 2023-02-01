export const Question = ({ question }) => {
  return (
    <div className='quiz-card__question-container'>
      <p className='quiz-card__question'>{question}</p>
    </div>
  );
};
