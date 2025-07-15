import { useParams } from 'react-router-dom';
import products from '../data/products';
import categories from '../data/categories';
import Breadcrumbs from '../components/Breadcrumbs';

const CombinedPage = () => {
  const { categoryId, productId } = useParams();
  const catId = parseInt(categoryId);
  const prodId = parseInt(productId);

  if (isNaN(catId) || isNaN(prodId)) return <h2>Parámetros inválidos</h2>;

  const category = categories.find(c => c.id === catId);
  const product = products.find(p => p.id === prodId && p.categoryId === catId);

  if (!category) return <h2>Categoría no encontrada</h2>;
  if (!product) return <h2>Producto no encontrado en esta categoría</h2>;

  return (
    <div>
      <Breadcrumbs />
      <h2>{product.name}</h2>
      <p>Producto #{product.id} de la categoría {category.name}</p>
    </div>
  );
};

export default CombinedPage;
