export const ProgressBar = ({ width }) => {
  return (
    <div className='progress'>
      <div style={{ width: width }} className='progress__innerLine'></div>
    </div>
  );
};
