import { useParams, useNavigate } from 'react-router-dom';
import questions from '../data/questions';

const QuestionPage = () => {
  const { number } = useParams();
  const navigate = useNavigate();
  const currentIndex = parseInt(number) - 1;

  const question = questions[currentIndex];

  if (!question) {
    return <h2>Pregunta no encontrada</h2>;
  }

  const goNext = () => {
    if (currentIndex + 1 < questions.length) {
      navigate(`/quiz/question/${currentIndex + 2}`);
    } else {
      navigate('/quiz/results');
    }
  };

  const goBack = () => {
    if (currentIndex > 0) {
      navigate(`/quiz/question/${currentIndex}`);
    } else {
      navigate('/quiz');
    }
  };

  return (
    <div>
      <h3>Pregunta {number}</h3>
      <p>{question.question}</p>
      <ul>
        {question.options.map((opt, i) => (
          <li key={i}>{opt}</li>
        ))}
      </ul>
      <button onClick={goBack}>Anterior</button>
      <button onClick={goNext}>Siguiente</button>
    </div>
  );
};

export default QuestionPage;
    