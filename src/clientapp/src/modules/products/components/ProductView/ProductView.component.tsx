import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ProductDto } from '../../../../../../modules/product/product.table';
import { Container } from '../../../../layout/Container/Container.style';
import { HttpService } from '../../../../shared/services/http.service';
import { Button } from '../../../../shared/styles/Button.style';
import {
  Card,
  CardHeader,
  CardImage,
  CardProductPrice,
} from '../../../../shared/styles/Card.style';
import { calculatePrice, hasDiscount } from '../../../../utilities/price.util';
import { ProductPrice } from '../Product/ProductPrice.component';
import { ProductDetails } from '../ProductDetails/ProductDetails.component';
import { ProductViewContainer } from './ProductView.style';

interface ProductViewProps {}

export const ProductView: React.FC<ProductViewProps> = () => {
  const productService = new HttpService(
    'http://localhost:8000/api/v1/products'
  );
  const [product, setProduct] = useState<ProductDto>();
  const { id } = useParams();

  const getProduct = (): void => {
    productService
      .get<ProductDto>(`${productService.url}/${id}`)
      .subscribe((response) => setProduct(response));
  };

  useEffect(() => {
    if (!product) getProduct();
  });

  useEffect(() => {
    document.body.classList.add('bg--white');

    return () => {
      document.body.classList.remove('bg--white');
    };
  });

  return (
    <Container hasMarginTop={true}>
      <ProductViewContainer>
        <Card hasShadow={false}>
          <CardImage src={product?.image} size="large" padded={true} />
        </Card>

        <div>
          <h5>{product?.brandName}</h5>
          <h2 style={{ margin: '0.25em 0' }}>{product?.name}</h2>
          <h3>
            <ProductPrice product={product} includeTag={true} />
          </h3>
          <h5 style={{ marginTop: '2em' }}>Size</h5>
          <h4>
            {product?.quantity}
            {product?.unitShortName}
          </h4>
          <Button size="large" style={{ margin: '1em 0' }}>
            Add to Cart
          </Button>
          <h4>About this Strain</h4>
          <p>{product?.description}</p>
        </div>

        <ProductDetails product={product}></ProductDetails>
      </ProductViewContainer>
    </Container>
  );
};
