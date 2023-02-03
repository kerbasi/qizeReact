import { Button } from "./Button";

export const Final = ({ score, length, handleClickNewButton }) => {
  return (
    <>
      <div className='quiz-card__final-result'>
        You've got: {score} right {score === 1 ? `answer` : `answers`}{" "}
        from&nbsp;{`${length}`}!
        {score / length >= 0.8
          ? `You're a Pro!!!`
          : score / length >= 0.6
          ? `It's good enough!`
          : `You could do better!`}
      </div>
      <Button handleClickButton={handleClickNewButton}>Start again</Button>
    </>
  );
};
