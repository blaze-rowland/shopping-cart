import { userSeeder } from '../modules/user/user.seeder';
import { productSeeder } from '../modules/product/product.seeder';

export const seed = async () => {
  await userSeeder();
  await productSeeder();

  console.log('Seeding Complete');
};
