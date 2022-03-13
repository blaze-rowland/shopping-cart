/* eslint-disable react-hooks/exhaustive-deps */
import { ProductDto } from '../../../../../../modules/product/product.table';
import { CardList } from '../../../../shared/styles/Card.style';
import { Product } from '../Product/Product.component';

interface ProductListProps {
  products: Array<ProductDto>;
}

export const ProductList: React.FC<ProductListProps> = (props) => {
  const { products } = props;

  const productComponent = products.map((product: ProductDto) => (
    <Product key={product.id} product={product} />
  ));

  return products?.length > 0 ? (
    <CardList style={{ marginBottom: '2rem' }}>{productComponent}</CardList>
  ) : (
    <p>No Products..</p>
  );
};
