import styled from 'styled-components';

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
`;

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 1em 1.5em;

  h2 {
    color: var(--color-primary);
    margin: 0;
  }
`;

export const CardPromo = styled(Card)`
  grid-column: 1/3;
`;

export const CardHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;

  * {
    margin: 0;
    padding: 0;
  }
`;
