import Forty from '@forty-boy/sql/lib';
import { AmountUnitSchema } from '../amountUnit/amountUnit.table';

export class ProductSchema {
  id?: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  createdAt: Date;
  amount: number;
  amountUnitId?: number; // Foreign Key to units table
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
    amountUnitId: number,
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
    this.amountUnitId = amountUnitId;
    this.discount = discount;
    this.isPromo = isPromo;
  }
}

export type ProductDataset = Array<ProductSchema>;

export interface ProductDto extends ProductSchema {
  unitShortName: string;
  unitName: string;
}

export class ProductTable extends Forty.Table<ProductSchema> {
  constructor(tableName: string, products: ProductDataset = []) {
    super(tableName, ProductSchema, products);
  }
}
