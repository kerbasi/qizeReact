export const Result = ({ value, text }) => {
  const classes = value
    ? `quiz-card__result`
    : `quiz-card__result quiz-card__result_type_wrong`;
  return <div className={classes}>{text}</div>;
};
