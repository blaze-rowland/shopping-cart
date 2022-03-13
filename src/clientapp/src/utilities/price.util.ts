import {
  ProductDto,
  ProductSchema,
} from '../../../modules/product/product.table';

export const calculatePrice = (price: number, discount?: number): number => {
  if (!discount) return price;

  return price * ((100 - discount) / 100);
};

export const hasDiscount = (product?: ProductSchema | ProductDto): boolean => {
  if (!product) return false;
  return product.discount !== undefined && product?.discount > 0;
};
