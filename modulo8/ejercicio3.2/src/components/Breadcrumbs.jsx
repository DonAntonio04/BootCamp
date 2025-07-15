import { useParams, Link } from 'react-router-dom';
import categories from '../data/categories';
import products from '../data/products';

const Breadcrumbs = () => {
  const { categoryId, productId } = useParams();
  const catId = parseInt(categoryId);
  const prodId = parseInt(productId);

  const category = categories.find(cat => cat.id === catId);
  const product = products.find(p => p.id === prodId);

  return (
    <nav>
      <Link to="/">Inicio</Link>
      {category && (
        <>
          {" > "}
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </>
      )}
      {product && (
        <>
          {" > "}
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;
