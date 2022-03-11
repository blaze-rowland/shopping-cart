import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--color-primary);
  border: none;
  color: #fff;
  font-size: 1em;
  font-weight: 500;
  border-radius: 4px;
  padding: 0.5em 1em;
`;

export const Submit = styled(Button).attrs({ as: 'input' })``;
