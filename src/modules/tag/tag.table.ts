import Forty from '@forty-boy/sql/lib';

export class TagSchema {
  id?: number;
  name: string;
  createdAt: Date;

  constructor(id: number, name: string, createdAt: Date) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
  }
}

export type TagDataset = Array<TagSchema>;

export class TagTable extends Forty.Table<TagSchema> {
  constructor(tableName: string, tags: TagDataset = []) {
    super(tableName, TagSchema, tags);
  }
}
