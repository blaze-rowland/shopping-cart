import Forty from '@forty-boy/sql/lib';

export class ProductSchema {
  id?: number;
  name: string;
  brandId: number;
  tagId?: number;
  price: number;
  image: string;
  description: string;
  quantity: number;
  discount?: number;
  isPromo?: boolean;
  unitId?: number; // Foreign Key to units table
  createdAt: Date;

  constructor(
    id: number,
    name: string,
    brandId: number,
    tagId: number,
    price: number,
    image: string,
    description: string,
    quantity: number,
    discount: number,
    isPromo: boolean,
    unitId: number,
    createdAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.brandId = brandId;
    this.tagId = tagId;
    this.price = price;
    this.image = image;
    this.description = description;
    this.quantity = quantity;
    this.discount = discount;
    this.isPromo = isPromo;
    this.unitId = unitId;
    this.createdAt = createdAt;
  }
}

export type ProductDataset = Array<ProductSchema>;

export interface ProductDto extends ProductSchema {
  unitName: string;
  unitShortName: string;
  brandName: string;
  brandUrl: string;
  tagName: string;
}

export class ProductTable extends Forty.Table<ProductSchema> {
  constructor(tableName: string, products: ProductDataset = []) {
    super(tableName, ProductSchema, products);
  }
}
