import { useEffect, useState } from "react";

export const Button = ({ children, handleClickButton, value, showResult }) => {
  const [selected, setSelected] = useState(false);

  console.log(selected);

  useEffect(() => {
    setSelected(false);
  }, [children]);

  let classes = `quiz-card__button`;
  if (selected) {
    classes += value
      ? ` quiz-card__button_selected_true`
      : ` quiz-card__button_selected_false`;
  } else if (showResult) {
    classes += ` quiz-card__button_disabled`;
  }

  return (
    <button
      disabled={showResult}
      className={classes}
      onClick={() => {
        setSelected(true);
        handleClickButton(value);
      }}
    >
      {children}
    </button>
  );
};
