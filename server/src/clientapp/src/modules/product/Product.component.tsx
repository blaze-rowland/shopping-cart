import { ProductSchema } from '../../../../modules/product/product.table';
import {
  Card,
  CardPromo,
  CardHeader,
  CardImage,
  CardBody,
} from '../../shared/styles/Card.style';
import { DateFormat, formatDate } from '../../utilities/date.util';

interface ProductProps {
  product: ProductSchema;
}

export const Product: React.FC<ProductProps> = (props) => {
  const product = props.product;

  const CardToUse = product.isPromo ? CardPromo : Card;

  return (
    <CardToUse>
      <CardImage src={product.image} />
      <CardHeader>
        <h2>{product.name}</h2>
        <p style={{ color: 'green' }}>${product.price}</p>
      </CardHeader>
      <CardBody>
        <p>{formatDate(product.createdAt, DateFormat.MMDDYYYY)}</p>
      </CardBody>
    </CardToUse>
  );
};
