import { useNavigate } from 'react-router-dom';

const QuizStart = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz/question/1');
  };

  return (
    <div>
      <h2>Bienvenido al Quiz</h2>
      <button onClick={startQuiz}>Comenzar</button>
    </div>
  );
};

export default QuizStart;
