import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

export const Quiz = () => {
  const [width, setWidth] = useState("0");

  return (
    <div className='quiz-card'>
      <ProgressBar width={width} />
      <div class='quiz-card__question-container'>
        <p class='quiz-card__question'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          blanditiis, at ex provident pariatur quae et voluptatem aspernatur
          omnis tempora tempore dolorum repudiandae deleniti, consectetur
          voluptate corrupti error. Suscipit, eaque! Beatae similique quibusdam
          corporis, inventore nam modi, iusto recusandae obcaecati quisquam
          facilis accusantium et eos maxime aliquid incidunt blanditiis
          assumenda totam quas, sit rem. Earum quas quam aliquam ducimus porro.
        </p>
      </div>
      <div class='quiz-card__answer-container'>
        <p class='quiz-card__answer'>LoremLoremLorem</p>
        <p class='quiz-card__answer'>Lorem</p>
        <p class='quiz-card__answer'>LoremLoremLoremLoremLoremLorem</p>
        <p class='quiz-card__answer'>LoremLorem</p>
      </div>
    </div>
  );
};
