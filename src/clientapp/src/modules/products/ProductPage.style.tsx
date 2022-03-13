import styled from 'styled-components';
import { ProductNav } from './components/ProductNav/ProductNav.style';

export const ProductPageContainer = styled.main`
  --spacing: 3rem;
  display: grid;
  grid-template-columns: calc(var(--width-product-nav) + var(--spacing)) auto;
  margin-right: var(--spacing);

  ${ProductNav} {
    margin-right: var(--spacing);
    min-height: 100vh;
    height: 100%;
  }
`;
