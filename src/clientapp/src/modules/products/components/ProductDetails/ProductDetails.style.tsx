import styled from 'styled-components';
import { Tag } from '../../../../shared/styles/Tag.style';

export const ProductDetail = styled.div`
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: 8px;
  overflow: hidden;
`;

export const ProductDetailHeader = styled.div`
  background-color: var(--color-gray-500);
  color: var(--color-white);
  font-size: 0.9em;
  font-weight: 500;
  padding: 0.5em 1em;
  text-align: center;
  text-transform: uppercase;
`;

export const ProductDetailSection = styled.section`
  padding: 1em;

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-200);
    padding-bottom: 1em;
  }

  h5 {
    // margin-bottom: 0.25em;
  }

  ${Tag} {
    display: inline-block;
    margin-top: 0.5em;
  }
`;
