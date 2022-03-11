import styled from 'styled-components';

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  gap: 1em;
`;

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  box-shadow: 0 6px 16px -6px rgba(0, 0, 0, 0.2);
  grid-area: auto / span 5;
  overflow: hidden;
  h2 {
    color: var(--color-primary);
    margin: 0;
  }
`;

export const CardHover = styled(Card)`
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover,
  &:focus {
    transform: translateY(-0.5em) scale(1.01);
  }
`;

export const CardPromo = styled(CardHover)`
  grid-area: auto / span 10;
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
