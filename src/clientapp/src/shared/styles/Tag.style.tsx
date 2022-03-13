import styled from 'styled-components';

export type StyledTagColor = 'success' | 'error' | 'info' | 'alternate';

interface StyledTagProps {
  backgroundColor?: StyledTagColor;
  color?: StyledTagColor;
  size?: 'small' | 'medium' | 'large';
}

export const Tag = styled.p<StyledTagProps>`
  align-items: center;
  background-color: var(--color-green-300);
  border-radius: 500px;
  color: var(--color-green-500);
  display: flex;
  font-size: 0.75rem;
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
      result += `border: 1px solid var(--color-green-500); color: var(--color-green-500);`;
    if (props.color === 'error')
      result += `border: 1px solid var(--color-red-500); color: var(--color-red-500);`;
    if (props.color === 'info')
      result += `border: 1px solid var(--color-blue-400); color: var(--color-blue-500);`;

    return result;
  }}

  ${(props) => {
    if (props.backgroundColor === 'success')
      return `border: none; background-color: var(--color-green-300); color: var(--color-green-500);`;
    if (props.backgroundColor === 'error')
      return `border: none; background-color: var(--color-red-300); color: var(--color-red-500);`;
    if (props.backgroundColor === 'info')
      return `border: none; background-color: var(--color-blue-300); color: var(--color-blue-500);`;
    if (props.backgroundColor === 'alternate')
      return `border: none; background-color: var(--color-purple-300); color: var(--color-purple-500);`;
  }}

  ${(props) => props.size === 'small' && 'padding: 0.5em 0.75em;'}
`;
