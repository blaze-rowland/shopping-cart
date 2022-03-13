import styled from 'styled-components';

interface StyledButtonProps {
  size?: 'small' | 'medium' | 'large';
}

export const Button = styled.button<StyledButtonProps>`
  background-color: var(--color-primary);
  border: none;
  border-radius: 4px;
  color: var(--color-white);
  cursor: pointer;
  font-size: 1em;
  font-weight: 500;
  padding: 0.75em 1em;
  transition: box-shadow 0.2s ease;

  ${(props) => props?.size === 'large' && 'padding: 1.25em 4em;'}

  &:hover, &:focus {
    background-color: var(--color-primary-hover);
  }

  &:active {
    box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
      0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  }
`;

export const Submit = styled(Button).attrs({ as: 'input' })``;
