import Forty from '@forty-boy/sql/lib';

export class BrandSchema {
  id?: number;
  name: string;
  url?: string;
  createdAt: Date;

  constructor(id: number, name: string, url: string, createdAt: Date) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.createdAt = createdAt;
  }
}

export type BrandDataset = Array<BrandSchema>;

export class BrandTable extends Forty.Table<BrandSchema> {
  constructor(tableName: string, brands: BrandDataset = []) {
    super(tableName, BrandSchema, brands);
  }
}
