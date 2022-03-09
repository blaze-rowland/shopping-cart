import React, { useState } from 'react';
import axios from 'axios';
import { ProductSchema } from '../../../../modules/product/product.table';

interface AddProductProps {}

export const AddProduct: React.FC<AddProductProps> = () => {
  const [image, setImage] = useState<any | null>();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const product: ProductSchema = {
      name: 'Phone',
      price: 1000,
      isPromo: false,
      createdAt: new Date(),
    };

    const formImage = new FormData();
    formImage.append('image', image[0]);

    console.log();

    const response = await fetch('http://localhost:8000/api/v1/products', {
      method: 'POST',
      body: JSON.stringify(formImage),
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type='file' accept='image/*' onChange={(e) => setImage(e)} />
      <input type='submit' />
    </form>
  );
};
