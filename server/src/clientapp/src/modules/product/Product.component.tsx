import { ProductSchema } from '../../../../modules/product/product.table';
import { Card, CardHeader } from '../../shared/styles/Card.style';
import { DateFormat, formatDate } from '../../utilities/date.util';

interface ProductProps {
  product: ProductSchema;
}

export const Product: React.FC<ProductProps> = (props) => {
  const product = props.product;
  return (
    <Card>
      <CardHeader>
        <h2>{product.name}</h2>
        <p style={{ color: 'green' }}>${product.price}</p>
      </CardHeader>
    </Card>
  );
};
