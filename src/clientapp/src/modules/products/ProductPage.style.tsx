import styled from 'styled-components';
import { CardList } from '../../shared/styles/Card.style';
import { ProductNav } from './components/ProductNav/ProductNav.style';

export const ProductPageContainer = styled.main`
  --spacing: 3rem;

  // align-items: flex-start;
  display: grid;
  grid-template-columns: calc(250px + var(--spacing)) auto;
  margin-right: var(--spacing);

  ${ProductNav} {
    margin-right: var(--spacing);
    min-height: 100vh;
    height: 100%;
  }

  ${CardList} {
    margin: var(--spacing) 0;
  }
`;
