import styled from 'styled-components';
import { Tag } from '../../../../shared/styles/Tag.style';

export const ProductNav = styled.aside`
  background-color: var(--color-white);
  position: sticky;
`;

export const ProductNavSection = styled.section`
  border-bottom: 1px solid var(--color-gray-200);
  position: sticky;
  top: var(--height-nav);
`;

export const ProductNavHeader = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 1.5em var(--padding-x);

  h4 {
    color: var(--color-gray-500);
    font-size: 1.1em;
    font-weight: 600;
    margin: 0;
  }

  svg {
    color: var(--color-primary);
    height: 0.75em;
  }
`;

export const ProductNavBody = styled.div`
  padding: 0 var(--padding-x) 2em;
`;

export const ProductNavTags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  flex-wrap: wrap;
`;

export const ProductNavTag = styled(Tag)`
  background-color: var(--color-gray-100);
  color: var(--color-gray-500);
  cursor: pointer;
  display: inline;
`;
