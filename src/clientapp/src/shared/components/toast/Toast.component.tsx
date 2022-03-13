import React from 'react';
import { Toast } from './Toast.style';

export interface ToastProps {
  message: string;
  type: ToastType;
  action?: (...args: any) => any;
}

export type ToastType = 'success' | 'error' | 'info';

export const PopupToast: React.FC<ToastProps> = (props) => {
  const { message, type, action } = props;

  return (
    <Toast type={type} onClick={action}>
      <p>{message}</p>
    </Toast>
  );
};
