import Forty from '@forty-boy/sql/lib';

export class ProductSchema {
  id?: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  createdAt: Date;
  amount: number;
  amountUnit?: number; // Foreign Key to units table
  discount?: number;
  isPromo?: boolean;

  constructor(
    id: number,
    name: string,
    brand: string,
    price: number,
    image: string,
    description: string,
    createdAt: Date,
    amount: number,
    amountUnit: number,
    discount: number,
    isPromo: boolean
  ) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.image = image;
    this.description = description;
    this.createdAt = createdAt;
    this.amount = amount;
    this.amountUnit = amountUnit;
    this.discount = discount;
    this.isPromo = isPromo;
  }
}

export type ProductDataset = Array<ProductSchema>;

export class ProductTable extends Forty.Table<ProductSchema> {
  constructor(tableName: string, products: ProductDataset = []) {
    super(tableName, ProductSchema, products);
  }
}
