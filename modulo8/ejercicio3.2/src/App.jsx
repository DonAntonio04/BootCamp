import { Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CombinedPage from './pages/CombinedPage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/category/:categoryId/product/:productId" element={<CombinedPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
