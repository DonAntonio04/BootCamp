import { useParams } from 'react-router-dom';
import categories from '../data/categories';
import products from '../data/products';
import Breadcrumbs from '../components/Breadcrumbs';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const id = parseInt(categoryId);

  if (isNaN(id)) return <h2>ID de categoría inválido</h2>;

  const category = categories.find(cat => cat.id === id);
  if (!category) return <h2>Categoría no encontrada</h2>;

  const categoryProducts = products.filter(p => p.categoryId === id);

  return (
    <div>
      <Breadcrumbs />
      <h2>Productos en {category.name}</h2>
      <ul>
        {categoryProducts.map(p => (
          <li key={p.id}>
            <a href={`/category/${category.id}/product/${p.id}`}>{p.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
