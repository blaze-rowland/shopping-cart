/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import {
  ProductDataset,
  ProductSchema,
} from '../../../../modules/product/product.table';
import { Loading } from '../../shared/components/Loading.component';
import { HttpService } from '../../shared/services/http.service';
import { CardList } from '../../shared/styles/Card.style';
import { Product } from './Product.component';

interface ProductListProps {}

export const ProductList: React.FC<ProductListProps> = (props) => {
  const productService = new HttpService(
    'http://localhost:8000/api/v1/products'
  );
  const [products, setProducts] = useState<ProductDataset>([]);

  useEffect(() => {
    if (!products?.length) getProducts();
  }, []);

  const getProducts = () => {
    productService.get<ProductDataset>().subscribe({
      next: (products) => setProducts(products),
      error: (err) => console.error(err),
    });
  };

  const productComponent = products.map((product: ProductSchema) => (
    <Product key={product.id} product={product} />
  ));

  return products?.length ? (
    <CardList>{productComponent}</CardList>
  ) : (
    <Loading />
  );
};
