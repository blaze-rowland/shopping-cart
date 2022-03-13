import styled from 'styled-components';

interface ContainerProps {
  hasMarginTop?: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  max-width: var(--width-container);
  ${(props) => props.hasMarginTop && 'margin-top: 3rem'}
`;

export const ContainerGrid = styled(Container)`
  max-width: unset;
  margin: inherit;
  position: relative;
`;
