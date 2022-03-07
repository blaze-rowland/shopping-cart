import { Subject, Observable } from 'rxjs';
import { productTable } from '../../database';
import { ProductDataset } from './product.table';

export class ProductService {
  constructor() {}

  public getAll(): Observable<ProductDataset> {
    const response = new Subject<ProductDataset>();
    productTable.find().subscribe((products) => response.next(products));
    return response.asObservable();
  }
}
