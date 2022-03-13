import { userSeeder } from '../modules/user/user.seeder';
import { productSeeder } from '../modules/product/product.seeder';
import { unitSeeder } from '../modules/unit/unit.seeder';
import { brandSeeder } from '../modules/brand/brand.seeder';
import { tagSeeder } from '../modules/tag/tag.seeder';

export const seed = async () => {
  await userSeeder();
  await unitSeeder();
  await tagSeeder();
  await brandSeeder();
  await productSeeder();

  console.log('Seeding Complete');
};
