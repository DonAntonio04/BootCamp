import { useParams } from 'react-router-dom';
import products from '../data/products';
import Breadcrumbs from '../components/Breadcrumbs';

const ProductPage = () => {
  const { productId } = useParams();
  const id = parseInt(productId);

  if (isNaN(id)) return <h2>ID de producto inválido</h2>;

  const product = products.find(p => p.id === id);
  if (!product) return <h2>Producto no encontrado</h2>;

  return (
    <div>
      <Breadcrumbs />
      <h2>Detalle del producto: {product.name}</h2>
      <p>ID: {product.id}</p>
      <p>Categoría ID: {product.categoryId}</p>
    </div>
  );
};

export default ProductPage;
