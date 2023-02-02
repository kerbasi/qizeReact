export const Answer = ({ children, handleClickAnswer, value }) => {
  return (
    <button
      className='quiz-card__answer-button'
      onClick={() => handleClickAnswer(value)}
    >
      {children}
    </button>
  );
};
