import { ProductSchema } from '../../../../modules/product/product.table';
import { DateFormat, formatDate } from '../../utilities/date.util';

interface ProductProps {
  product: ProductSchema;
}

export const Product: React.FC<ProductProps> = (props) => {
  return (
    <tr>
      <td>{props.product.name}</td>
      <td>${props.product.price}</td>
      <td>{formatDate(props.product.createdAt, DateFormat.MMDDYYYY)}</td>
    </tr>
  );
};
