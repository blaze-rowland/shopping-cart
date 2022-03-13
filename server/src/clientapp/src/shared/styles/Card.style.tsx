import styled from 'styled-components';

interface StyledCardProduct {
  discount?: number;
}

interface StyledCardProductPrice {
  discount?: number;
}

export const CardList = styled.div`
  display: grid;
  // grid-template-columns: repeat(20, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  gap: 1em;
`;

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 6px 16px -6px rgba(0, 0, 0, 0.2);
  // grid-area: auto / span 5;
  overflow: hidden;
`;

export const CardHover = styled(Card)`
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover,
  &:focus {
    transform: translateY(-0.5em) scale(1.01);
  }
`;
export const CardImage = styled.img`
  object-fit: cover;
  height: 15em;
  overflow: hidden;
  width: 100%;
`;

export const CardHeader = styled.div`
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  padding: 0.75em 1.5em;

  * {
    margin: 0;
    padding: 0;
  }
`;

export const CardBody = styled.div`
  padding: 1em 1.5em;
`;

export const CardBrand = styled.h5`
  color: #979797;
  font-size: 0.8em;
  text-transform: uppercase;
`;

export const CardTitle = styled.h4`
  color: #5b5d62;
  font-size: 1.2em;
`;

export const CardMeta = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0.75em 0;

  div:not(:last-of-type) {
    border-right: 1px solid var(--border-color);
    margin-right: 0.5em;
    padding-right: 0.5em;
  }
`;

export const CardTag = styled.div`
  background-color: #edf0e6;
  border-radius: 500px;
  color: #829b50;
  padding: 0.5em 1.5em;
  position: absolute;
  font-size: 0.8em;
  top: 1em;
  left: 1em;
`;

export const CardProductQuantity = styled.div`
  color: #998a8a;
  font-size: 0.9em;
  font-weight: 500;
`;

export const CardProductPrice = styled.span<StyledCardProductPrice>`
  font-weight: 500;

  ${(props) => {
    if (props.discount !== undefined && props.discount > 0)
      return 'color: #ba452d';
    if (props.discount === undefined || props.discount === 0)
      return 'color: #5b5d62';
  }}
`;

export const CardFooter = styled.div`
  background-color: var(--color-primary);
  color: #fff;
  font-size: 0.9em;
  padding: 0.25em 1.5em;
  text-align: center;

  * {
    margin: 0;
  }
`;

export const CardProduct = styled(CardHover)<StyledCardProduct>`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: self-start;

  a {
    color: currentColor;
    text-decoration: none;
  }

  ${(props) =>
    props.discount !== undefined && props.discount > 0
      ? `
    padding-bottom: 29px;
    position: relative;
  `
      : ''};

  ${CardHeader} {
    display: flex;
    flex-direction: column;
  }

  ${CardHeader} h2 {
    margin: 0 auto;
  }

  ${CardImage} {
    object-fit: contain;
    height: 8em;
  }

  ${CardBody} p:last-of-type {
    margin: 0;
  }

  ${CardFooter} {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
