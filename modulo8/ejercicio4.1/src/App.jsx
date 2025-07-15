import { Routes, Route, Navigate } from 'react-router-dom';
import QuizStart from './pages/QuizStart';
import QuestionPage from './pages/QuestionPage';
import QuizResults from './pages/QuizResults';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/quiz" />} />
      <Route path="/quiz" element={<QuizStart />} />
      <Route path="/quiz/question/:number" element={<QuestionPage />} />
      <Route path="/quiz/results" element={<QuizResults />} />
      <Route path="*" element={<h2>Página no encontrada</h2>} />
    </Routes>
  );
};

export default App;
