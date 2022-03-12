import { SqlService } from '@forty-boy/sql';
import { ProductTable } from './product.table';

export async function productSeeder() {
  const productTable = new ProductTable('Products');

  async function createTable() {
    const sqlService = new SqlService(productTable.tableName);
    await sqlService.createTableQuery([
      {
        name: 'id',
        type: 'INT',
        size: 11,
        nullable: false,
        autoIncrement: true,
        primaryKey: true,
      },
      {
        name: 'name',
        type: 'VARCHAR',
        size: 255,
        nullable: false,
      },
      {
        name: 'brand',
        type: 'VARCHAR',
        size: 255,
        nullable: false,
      },
      {
        name: 'price',
        type: 'INT',
        size: 11,
        nullable: false,
      },
      {
        name: 'image',
        type: 'VARCHAR',
        size: 255,
        nullable: true,
      },
      {
        name: 'description',
        type: 'TEXT',
        nullable: true,
      },
      {
        name: 'isPromo',
        type: 'BOOL',
        nullable: false,
        default: '0',
      },
      {
        name: 'amount',
        type: 'INT',
        size: 11,
        nullable: false,
      },
      {
        name: 'amountUnitId',
        type: 'INT',
        nullable: true,
        foreignKey: {
          referenceId: 'id',
          referenceTable: 'amountUnits',
        },
      },
      {
        name: 'discount',
        type: 'INT',
        size: 3,
        nullable: true,
      },
      {
        name: 'createdAt',
        type: 'DATETIME',
        nullable: false,
      },
    ]);
  }

  async function createProducts() {
    productTable.add({
      name: 'Television',
      price: 500,
      isPromo: false,
      brand: 'Samsung',
      description: 'Lorem ipsum',
      amount: 5,
      amountUnitId: 1,
      discount: 0,
      image:
        'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80',
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Nectar Mattress',
      price: 600,
      isPromo: false,
      brand: 'Samsung',
      description: 'Lorem ipsum',
      amount: 5,
      amountUnitId: 1,
      discount: 0,
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Feverything-pr.com%2Fwp-content%2Fuploads%2F2017%2F10%2Fnectar-sleep-mattress-review-soft-organicnewsroom.jpg&f=1&nofb=1',
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Lamp',
      price: 25,
      isPromo: false,
      brand: 'Samsung',
      description: 'Lorem ipsum',
      amount: 5,
      amountUnitId: 1,
      discount: 0,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.yimg.com%2Faah%2Fyhst-88493364559015%2Fcoral-table-lamp-5.gif&f=1&nofb=1',
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Dresser',
      price: 250,
      isPromo: false,
      brand: 'Samsung',
      description: 'Lorem ipsum',
      amount: 5,
      amountUnitId: 1,
      discount: 0,
      image:
        'https://secure.img1-fg.wfcdn.com/im/50559287/resize-h800-w800%5Ecompr-r85/9859/98593622/Alexander+8+Drawer+Double+Dresser.jpg',
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Changing Table',
      price: 300,
      isPromo: false,
      brand: 'Samsung',
      description: 'Lorem ipsum',
      amount: 5,
      amountUnitId: 1,
      discount: 0,
      image:
        'https://i5.walmartimages.com/asr/a959a42b-b195-4a58-ba55-be2a2b074f68.ccbe7ab056bfc77bf1b1e826f2e7285a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Refrigerator',
      price: 2500,
      isPromo: false,
      brand: 'Samsung',
      description: 'Lorem ipsum',
      amount: 5,
      amountUnitId: 1,
      discount: 0,
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.paylessappliances.com%2Fshop%2Fvaughan%2F1526-thickbox_default%2Fkitchenaid-krfc704fs-36-counter-depth-french-door-platinum-interior-refrigerator.jpg&f=1&nofb=1',
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Hot Tub',
      price: 5000,
      isPromo: false,
      brand: 'Samsung',
      description: 'Lorem ipsum',
      amount: 5,
      amountUnitId: 1,
      discount: 0,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fwp-agilitysquared%2Fallenpoolsspas%2Fwp-content%2Fuploads%2F2019%2F11%2FHotSpring-Highlife-Envoy-2019-Alpine-White-Walnut-Lifestyle-Snow-01.jpg&f=1&nofb=1',
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Stuffed Sloth',
      price: 15,
      isPromo: false,
      brand: 'Samsung',
      description: 'Lorem ipsum',
      amount: 5,
      amountUnitId: 1,
      discount: 0,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F5ea3bee2-89e3-4a19-aafb-555300b1b474_3.83ac710dc36d39ba2a64ff880baa8fcd.jpeg&f=1&nofb=1',
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Pineapple Pizza',
      price: 18,
      isPromo: false,
      brand: 'Samsung',
      description: 'Lorem ipsum',
      amount: 5,
      amountUnitId: 1,
      discount: 0,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2Fa-Zmav8WmlWihOj3SMJZcT2tTgE%3D%2F5491x3661%2Ffilters%3Afill(auto%2C1)%2Fhawaiian-pizza-4691857-hero-01-1a8f6764c70e4113bbf31bd1a73aca2e.jpg&f=1&nofb=1',
      createdAt: new Date(),
    });
  }

  await createTable();
  await createProducts();
  console.log('Created Products table and seeded');
}
