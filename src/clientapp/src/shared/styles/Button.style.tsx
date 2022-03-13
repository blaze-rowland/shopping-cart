import styled from 'styled-components';

interface StyledButtonProps {
  size?: 'small' | 'medium' | 'large';
}

export const Button = styled.button<StyledButtonProps>`
  background-color: var(--color-primary);
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  font-weight: 500;
  border-radius: 4px;
  padding: 0.5em 1em;

  ${(props) => props?.size === 'large' && 'padding: 1.25em 4em;'}
`;

export const Submit = styled(Button).attrs({ as: 'input' })``;
