import Forty from '@forty-boy/sql/lib';

export class UnitSchema {
  id?: number;
  name: string;
  shortName?: string;

  constructor(id: number, name: string, shortName: string) {
    this.id = id;
    this.name = name;
    this.shortName = shortName;
  }
}

export type UnitDataset = Array<UnitSchema>;

export class UnitTable extends Forty.Table<UnitSchema> {
  constructor(tableName: string, units: UnitDataset = []) {
    super(tableName, UnitSchema, units);
  }
}
