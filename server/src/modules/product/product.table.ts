import Forty from '@forty-boy/sql/lib';

export class ProductSchema {
  id?: number;
  name: string;
  price: number;
  createdAt: Date;

  constructor(id: number, name: string, price: number, createdAt: Date) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.createdAt = createdAt;
  }
}

export type ProductDataset = Array<ProductSchema>;

export class ProductTable extends Forty.Table<ProductSchema> {
  constructor(tableName: string, products: ProductDataset = []) {
    super(tableName, ProductSchema, products);
  }
}
