import React from 'react';
import { ProductDto } from '../../../../../../modules/product/product.table';
import { Tag } from '../../../../shared/styles/Tag.style';
import {
  ProductDetail,
  ProductDetailHeader,
  ProductDetailSection,
} from './ProductDetails.style';

interface ProductDetailsProps {
  product?: ProductDto;
}

export const ProductDetails: React.FC<ProductDetailsProps> = (props) => {
  const { product } = props;

  return (
    <ProductDetail>
      <ProductDetailHeader>Product Details</ProductDetailHeader>
      <ProductDetailSection>
        <h5>THC</h5>
        <h3>0.36%</h3>
      </ProductDetailSection>
      <ProductDetailSection>
        <h5>Strain Type</h5>
        <Tag>{product?.tagName}</Tag>
      </ProductDetailSection>
    </ProductDetail>
  );
};
