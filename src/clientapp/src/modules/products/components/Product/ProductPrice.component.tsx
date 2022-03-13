import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  ProductDto,
  ProductSchema,
} from '../../../../../../modules/product/product.table';
import { CardProductPrice } from '../../../../shared/styles/Card.style';
import { Tag } from '../../../../shared/styles/Tag.style';
import { calculatePrice, hasDiscount } from '../../../../utilities/price.util';

interface ProductPriceProps {
  product?: ProductSchema | ProductDto;
  includeTag?: boolean;
}

export const ProductPrice: React.FC<ProductPriceProps> = (props) => {
  const { product, includeTag } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <CardProductPrice discount={product?.discount}>
        ${calculatePrice(product?.price || 0, product?.discount)}
      </CardProductPrice>

      {hasDiscount(product) && (
        <CardProductPrice
          discount={undefined}
          style={{
            textDecoration: 'line-through',
            marginLeft: '0.5em',
          }}
        >
          ${product?.price}
        </CardProductPrice>
      )}

      {includeTag && hasDiscount(product) && (
        <Tag style={{ marginLeft: '1em' }} color="error" size="small">
          <FontAwesomeIcon icon={faTag} />
          {product?.discount}% Off
        </Tag>
      )}
    </div>
  );
};
