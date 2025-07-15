const ProgressBar = ({ step }) => {
  const percent = (step / 4) * 100;
  return (
    <div style={{ border: '1px solid gray', margin: '10px 0' }}>
      <div style={{ width: `${percent}%`, backgroundColor: 'green', height: '10px' }} />
    </div>
  );
};

export default ProgressBar;
