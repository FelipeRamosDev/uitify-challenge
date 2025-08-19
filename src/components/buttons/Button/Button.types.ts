import type { ComponentBaseProps } from '@/types/base.types';

export interface ButtonProps extends ComponentBaseProps {
   title: string;
   type?: 'button' | 'submit' | 'reset';
   color?: 'primary' | 'secondary' | 'accent' | 'error' | 'success';
   disabled?: boolean;
}
