export const Button = ({ children, handleClickButton, value }) => {
  return (
    <button
      className='quiz-card__button'
      onClick={() => handleClickButton(value)}
    >
      {children}
    </button>
  );
};
