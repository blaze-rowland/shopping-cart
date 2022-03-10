import React from 'react';

interface AddProductProps {}

export const AddProduct: React.FC<AddProductProps> = () => {
  const onSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="submit" />
    </form>
  );
};
