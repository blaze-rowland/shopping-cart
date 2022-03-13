import { Link } from 'react-router-dom';
import { ProductDto } from '../../../../../../modules/product/product.table';
import {
  CardBody,
  CardHeader,
  CardImage,
  CardFooter,
  CardProduct,
  CardBrand,
  CardTitle,
  CardMeta,
  CardTag,
  CardProductPrice,
  CardProductQuantity,
} from '../../../../shared/styles/Card.style';
import { calculatePrice, hasDiscount } from '../../../../utilities/price.util';
import { truncate } from '../../../../utilities/text.util';
import { ProductPrice } from './ProductPrice.component';

interface ProductProps {
  product: ProductDto;
}

export const Product: React.FC<ProductProps> = (props) => {
  const { product } = props;

  return (
    <CardProduct discount={product.discount}>
      <Link to={`/product/${product.id}`}>
        <CardTag>{product.tagName}</CardTag>
        <CardImage src={product.image} />
        <CardHeader>
          <CardBrand>{product.brandName}</CardBrand>
          <CardTitle>{product.name}</CardTitle>
          <CardMeta>
            <CardProductQuantity>
              {product.quantity}
              {product.unitShortName}
            </CardProductQuantity>

            <ProductPrice product={product}></ProductPrice>
          </CardMeta>
        </CardHeader>
        <CardBody>
          <p>{truncate(product.description)}</p>
        </CardBody>
        {hasDiscount(product) && (
          <CardFooter>
            <p>
              <strong>{product.discount}% OFF</strong>
            </p>
          </CardFooter>
        )}
      </Link>
    </CardProduct>
  );
};
