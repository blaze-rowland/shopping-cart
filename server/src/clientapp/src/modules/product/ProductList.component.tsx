import { useEffect, useState } from 'react';
import { ProductSchema } from '../../../../modules/product/product.table';
import { Loading } from '../../shared/components/Loading.component';
import { CardList } from '../../shared/styles/Card.style';
import { Product } from './Product.component';

interface ProductListProps {}

export const ProductList: React.FC<ProductListProps> = (props) => {
  const [products, setProducts] = useState<Array<ProductSchema>>([]);

  useEffect(() => {
    if (!products?.length) getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch('http://localhost:8000/api/v1/products');
    const products = await response.json();

    setProducts(products);
  };

  const productComponent = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return products?.length ? (
    <CardList>{productComponent}</CardList>
  ) : (
    <Loading />
  );
};
