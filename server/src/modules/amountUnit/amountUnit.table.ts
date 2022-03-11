import Forty from '@forty-boy/sql/lib';

export class AmountUnitSchema {
  id?: number;
  name: string;
  shortName?: string;

  constructor(id: number, name: string, shortName: string) {
    this.id = id;
    this.name = name;
    this.shortName = shortName;
  }
}

export type AmountUnitDataset = Array<AmountUnitSchema>;

export class AmountUnitTable extends Forty.Table<AmountUnitSchema> {
  constructor(tableName: string, amountUnits: AmountUnitDataset = []) {
    super(tableName, AmountUnitSchema, amountUnits);
  }
}
