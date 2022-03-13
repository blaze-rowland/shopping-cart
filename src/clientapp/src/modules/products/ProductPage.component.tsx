import { useEffect, useState } from 'react';
import { debounceTime, Subject } from 'rxjs';
import { ProductDto } from '../../../../modules/product/product.table';
import { ContainerGrid } from '../../layout/Container/Container.style';
import { Loading } from '../../shared/components/Loading/Loading.component';
import { HttpService } from '../../shared/services/http.service';
import { FormControl, FormGroup } from '../../shared/styles/Form.style';
import { ProductList } from './components/ProductList/ProductList.component';
import { ProductNavigation } from './components/ProductNav/ProductNavigation.component';
import { ProductPageContainer } from './ProductPage.style';

interface ProductPageProps {}

export const ProductPage: React.FC<ProductPageProps> = () => {
  // Globals
  const productService = new HttpService(
    `${process.env.REACT_APP_SERVER_URL}/products`
  );
  const searchFieldSubject = new Subject<string>();

  // State
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Array<ProductDto>>([]);
  const [filteredProducts, setFilteredProducts] = useState<Array<ProductDto>>(
    []
  );

  useEffect(() => {
    if (!products?.length) getProducts();
  });

  useEffect(() => {
    const subscription = searchFieldSubject
      .pipe(debounceTime(500))
      .subscribe((val: string) => filterProducts(val));
    return () => {
      subscription.unsubscribe();
    };
  });

  // Fetch Data
  const getProducts = () => {
    productService.get<Array<ProductDto>>().subscribe({
      next: (products) => initializeProducts(products),
      error: (err) => console.error(err),
    });
  };

  const initializeProducts = (products: Array<ProductDto>): void => {
    setLoading(false);
    setProducts(products);
    setFilteredProducts(products);
  };

  // Methods
  const filterProducts = (value: string): void => {
    if (value === '') {
      setFilteredProducts(products);
    }
    setFilteredProducts(
      products.filter(
        (x) => x.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      )
    );
  };

  return (
    <ProductPageContainer>
      <ProductNavigation />
      {loading ? (
        <Loading sideNavOffset={true} />
      ) : (
        <ContainerGrid>
          <FormGroup style={{ marginTop: '1.5rem', width: '275px' }}>
            <FormControl
              type="text"
              onChange={(e) => searchFieldSubject.next(e.target.value)}
              placeholder="Search"
            />
          </FormGroup>
          <ProductList products={filteredProducts} />
        </ContainerGrid>
      )}
    </ProductPageContainer>
  );
};
