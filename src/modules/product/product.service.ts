import { Observable, Subject } from 'rxjs';
import { unitTable, productTable, brandTable, tagTable } from '../../database';
import { ProductDataset, ProductDto, ProductSchema } from './product.table';

export class ProductService {
  constructor() {}

  public getAll(): Observable<ProductDataset> {
    return productTable.find();
  }

  public get(id: number): Observable<ProductSchema> {
    return productTable.findOne({ condition: { id } });
  }

  public getDto(id: number): Observable<ProductDto> {
    const subject = new Subject<ProductDto>();
    this.getAllDto().subscribe((product) =>
      subject.next(product.filter((x) => x.id === id)[0])
    );
    return subject.asObservable();
  }

  public getAllDto(): Observable<Array<ProductDto>> {
    return productTable.join({
      joinType: 'INNER JOIN',
      columnsToSelect: [
        { column: 'id' },
        { column: 'name' },
        { column: 'price' },
        { column: 'image' },
        { column: 'description' },
        { column: 'quantity' },
        { column: 'discount' },
        { column: 'isPromo' },
        { column: 'createdAt' },
        { column: 'name', as: 'unitName', table: unitTable.tableName },
        {
          column: 'shortName',
          as: 'unitShortName',
          table: unitTable.tableName,
        },
        { column: 'name', as: 'brandName', table: brandTable.tableName },
        { column: 'url', as: 'brandUrl', table: brandTable.tableName },
        { column: 'name', as: 'tagName', table: tagTable.tableName },
      ],
      columnsOn: [
        {
          from: { column: 'id', table: unitTable.tableName },
          to: { column: 'unitId', table: productTable.tableName },
        },
        {
          from: { column: 'id', table: brandTable.tableName },
          to: { column: 'brandId', table: productTable.tableName },
        },
        {
          from: { column: 'id', table: tagTable.tableName },
          to: { column: 'tagId', table: productTable.tableName },
        },
      ],
    });
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
