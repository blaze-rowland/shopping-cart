import { ContainerGrid } from '../../layout/Container/Container.style';
import { ProductList } from './components/ProductList/ProductList.component';
import { ProductNavigation } from './components/ProductNav/ProductNavigation.component';
import { ProductPageContainer } from './ProductPage.style';

interface ProductPageProps {}

export const ProductPage: React.FC<ProductPageProps> = () => {
  return (
    <ProductPageContainer>
      <ProductNavigation />
      <ContainerGrid>
        <ProductList />
      </ContainerGrid>
    </ProductPageContainer>
  );
};
