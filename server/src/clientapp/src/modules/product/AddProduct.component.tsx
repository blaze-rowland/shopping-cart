import React, { useEffect, useState } from 'react';
import { ProductSchema } from '../../../../modules/product/product.table';
import { UserSchema } from '../../../../modules/user/user.table';
import { HttpService } from '../../shared/services/http.service';
interface AddProductProps {}

export const AddProduct: React.FC<AddProductProps> = () => {
  const productService = new HttpService(
    'http://localhost:8000/api/v1/products'
  );

  const [products, setProducts] = useState<Array<ProductSchema>>();
  const [name, setName] = useState<string | undefined>();
  const [price, setPrice] = useState<number | undefined>();
  const [image, setImage] = useState<string | undefined>();
  const [isPromo, setIsPromo] = useState<boolean | undefined>();

  const product = {
    name,
    price,
    image,
    isPromo,
  };

  const createProduct = (): void => {
    productService
      .post<Array<ProductSchema>>(productService.url, product)
      .subscribe((data) => setProducts(products));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    createProduct();
  };
  return (
    <form onSubmit={onSubmit}>
      <input type='text' onChange={(e) => setName(e.target.value)} />
      <input
        type='number'
        onChange={(e) => setPrice(parseInt(e.target.value))}
      />
      <input type='text' onChange={(e) => setImage(e.target.value)} />
      <input type='checkbox' onChange={(e) => setIsPromo(e.target.checked)} />
      <input type='submit' />

      {products}
    </form>
  );
};
