import { SqlService } from '@forty-boy/sql';
import { Observable, defer, from, Subject, map } from 'rxjs';
import { amountUnitTable, productTable } from '../../database';
import { ProductDataset, ProductDto, ProductSchema } from './product.table';

export class ProductService {
  constructor() {}

  public getAll(): Observable<Array<ProductDto>> {
    // return productTable.rawQuery(
    //   `SELECT p.id, P.name, P.brand, P.price, P.image, P.description, P.amount, P.amountUnitId, P.discount, P.createdAt, A.name as unitName, A.shortName as unitShortName FROM products P INNER JOIN amountunits A On A.id = P.amountUnitId`
    // );

    return amountUnitTable.join({
      joinType: 'INNER JOIN',
      tableName: productTable.tableName,
      columnsToSelect: [
        'id',
        'name',
        'brand',
        'price',
        'image',
        'description',
        'amount',
        'amountUnitId',
        'createdAt',
        'name',
        'shortName',
      ],
      columnsOn: { id: 'amountUnitId' },
    });

    // productTable.join({
    //   joinType: 'INNER JOIN',
    //   tableName: amountUnitTable.tableName,
    //   columnsToSelect: [
    //     { column: 'id' },
    //     { column: 'name' },
    //     { column: 'brand' },
    //     { column: 'price' },
    //     { column: 'image' },
    //     { column: 'description' },
    //     { column: 'amount' },
    //     { column: 'amountUnitId' },
    //     { column: 'discount' },
    //     { column: 'name', as: 'unitName' },
    //     { column: 'shortName', as: 'unitShortName' },
    //   ],
    //   columnsOn: { id: 'amountUnitId' },
    // });
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
