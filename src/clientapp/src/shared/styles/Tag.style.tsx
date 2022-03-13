import styled from 'styled-components';

interface StyledTagProps {
  color?: 'success' | 'error' | 'info';
  size?: 'small' | 'medium' | 'large';
}

export const Tag = styled.p<StyledTagProps>`
  align-items: center;
  background-color: var(--color-green-300);
  border-radius: 500px;
  color: var(--color-green-400);
  display: flex;
  font-size: 0.8em;
  font-weight: 500;
  margin: 0;
  padding: 0.5em 1em;
  width: fit-content;

  svg {
    margin-right: 0.5em;
    position: relative;
    top: 1px;
    transform: rotateY(180deg);
  }

  ${(props) => {
    let result = '';

    if (props.color) result += `background-color: var(--color-white);`;
    if (props.color === 'success')
      result += `border: 1px solid var(--color-green-400); color: var(--color-green-400);`;
    if (props.color === 'error')
      result += `border: 1px solid var(--color-red-500); color: var(--color-red-500);`;

    return result;
  }}

  ${(props) =>
    props.size === 'small' && 'padding: 0.5em 0.75em; font-size: 0.7em;'}
`;
