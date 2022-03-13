import styled from 'styled-components';

interface StyledLoaderProps {
  sideNavOffset?: boolean;
}

export const Loader = styled.div<StyledLoaderProps>`
  --size: 4rem;
  --width: 0.5rem;

  width: var(--size);
  height: var(--size);
  margin: 20px auto;
  border: var(--width) var(--color-gray-400) solid;
  border-top: var(--width) var(--color-primary) solid;
  border-radius: 50%;
  animation: rotate 0.6s infinite linear;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${(props) => {
    return (
      props.sideNavOffset && `left: calc(50% + var(--width-product-nav) / 2);`
    );
  }}

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
