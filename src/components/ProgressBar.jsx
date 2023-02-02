export const ProgressBar = ({ width, questionNumber, length }) => {
  return (
    <div className='progress'>
      <div style={{ width: width }} className='progress__inner-line'>
        {questionNumber < length && (
          <div
            style={questionNumber === 0 ? { left: "10px" } : {}}
            className='progress__current-pos'
          >
            {questionNumber}
          </div>
        )}
      </div>
      <div className='progress__final-pos'>{length}</div>
    </div>
  );
};
