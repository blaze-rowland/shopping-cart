import { ProductSchema } from '../../../../modules/product/product.table';
import {
  Card,
  CardBody,
  CardHeader,
  CardImage,
} from '../../shared/styles/Card.style';

interface ProductProps {
  product: ProductSchema;
}

export const Product: React.FC<ProductProps> = (props) => {
  const { product } = props;
  return (
    <Card>
      <CardImage src={product.image} />
      <CardHeader>
        <h2>{product.name}</h2>
      </CardHeader>
      <CardBody>
        <h3>{product.brand}</h3>
        <p>${product.price}</p>
        {product?.discount ? <p>{product.discount}% Off!</p> : null}
        <p>{product.description}</p>
        <p>{product.amount}</p>
      </CardBody>
    </Card>
  );
};
