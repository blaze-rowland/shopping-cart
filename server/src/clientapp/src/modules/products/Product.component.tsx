import { ProductDto } from '../../../../modules/product/product.table';
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
} from '../../shared/styles/Card.style';

interface ProductProps {
  product: ProductDto;
}

export const Product: React.FC<ProductProps> = (props) => {
  const { product } = props;

  const calculatePrice = (price: number, discount?: number): number => {
    if (!discount) return price;

    return price * ((100 - discount) / 100);
  };

  const hasDiscount = (): boolean => {
    return product.discount !== undefined && product?.discount > 0;
  };

  return (
    <CardProduct discount={product.discount}>
      {' '}
      <a href={product.brandUrl} rel="noopener noreferrer" target="_blank">
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

            <div>
              <CardProductPrice discount={product.discount}>
                ${calculatePrice(product.price, product.discount)}
              </CardProductPrice>

              {hasDiscount() && (
                <CardProductPrice
                  discount={undefined}
                  style={{
                    textDecoration: 'line-through',
                    marginLeft: '0.5em',
                  }}
                >
                  ${product.price}
                </CardProductPrice>
              )}
            </div>
          </CardMeta>
        </CardHeader>
        <CardBody>
          <p>{product.description}</p>
        </CardBody>
        {hasDiscount() && (
          <CardFooter>
            <p>
              <strong>{product.discount}% OFF</strong>
            </p>
          </CardFooter>
        )}
      </a>
    </CardProduct>
  );
};
