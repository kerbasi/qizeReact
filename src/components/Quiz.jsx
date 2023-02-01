import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

export const Quiz = () => {
  const [width, setWidth] = useState("0");

  return (
    <div className='quiz-card'>
      <ProgressBar width={width} />
    </div>
  );
};
