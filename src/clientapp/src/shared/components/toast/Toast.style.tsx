import styled from 'styled-components';
import { ToastType } from './Toast.component';

export interface StyledToastProps {
  type: ToastType;
}

const makeBackground = (type: ToastType) => {
  switch (type) {
    case 'success':
      return 'green';
    case 'error':
      return 'red';
    case 'info':
      return 'blue';
  }
};

export const Toast = styled.div<StyledToastProps>`
  ${(props) => `background-color: ${makeBackground(props.type)}`};
`;
