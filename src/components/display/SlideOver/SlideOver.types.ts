import type { ComponentBaseProps } from '@/types/base.types';

export interface SlideOverProps extends ComponentBaseProps {
   isOpen: boolean;
   onClose: () => void;
}
