import React, { useState } from 'react';
interface AddProductProps {}

export const AddProduct: React.FC<AddProductProps> = () => {
  const [name, setName] = useState<string | undefined>();
  const [price, setPrice] = useState<number | undefined>();
  const [image, setImage] = useState<string | undefined>();
  const [isPromo, setIsPromo] = useState<boolean | undefined>();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const product = {
      name,
      price,
      image,
      isPromo,
    };
    console.log(product);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input
        type="number"
        onChange={(e) => setPrice(parseInt(e.target.value))}
      />
      <input type="text" onChange={(e) => setImage(e.target.value)} />
      <input type="checkbox" onChange={(e) => setIsPromo(e.target.checked)} />
      <input type="submit" />
    </form>
  );
};
