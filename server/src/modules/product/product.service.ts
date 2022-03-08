import { Observable } from 'rxjs';
import { productTable } from '../../database';
import { ProductDataset, ProductSchema } from './product.table';

export class ProductService {
  constructor() {}

  public getAll(): Observable<ProductDataset> {
    return productTable.find();
  }

  public get(id: number): Observable<ProductSchema> {
    return productTable.findOne({ condition: { id } });
  }

  public create(product: ProductSchema): Observable<any> {
    return productTable.add(product);
  }

  public update(id: number, product: ProductSchema): Observable<any> {
    return productTable.update({
      values: product,
      condition: { id },
    });
  }

  public delete(id: number) {
    return productTable.delete({ id });
  }
}
