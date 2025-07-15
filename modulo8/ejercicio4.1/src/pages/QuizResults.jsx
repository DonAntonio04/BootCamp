import { useNavigate } from 'react-router-dom';

const QuizResults = () => {
  const navigate = useNavigate();

  const restart = () => {
    navigate('/quiz');
  };

  return (
    <div>
      <h2>¡Has terminado el quiz!</h2>
      <button onClick={restart}>Reiniciar</button>
    </div>
  );
};

export default QuizResults;
