import { userSeeder } from '../modules/user/user.seeder';
import { productSeeder } from '../modules/product/product.seeder';
import { amountUnitSeeder } from '../modules/amountUnit/amountUnit.seeder';

export const seed = async () => {
  await userSeeder();
  await amountUnitSeeder();
  await productSeeder();

  console.log('Seeding Complete');
};
