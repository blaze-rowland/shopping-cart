import styled from 'styled-components';

export const ProductViewContainer = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(
    auto-fill,
    minmax(calc(var(--width-container) / 4), 1fr)
  );
  gap: 4em;
`;
