import { parseCSS } from '@/helpers/parse';
import styles from './Button.module.css';

// types 
import type { ButtonProps } from './Button.types';

export default function Button({ title, type = 'button', className, color = 'primary', onClick, children }: ButtonProps) {
   const classes = parseCSS(className, [
      styles.Button,
      styles[color],
      'rounded-sm',
      'px-4',
      'py-2',
      'text-center',
      'uppercase',
      'cursor-pointer',
      'w-full'
   ]);

   return (
      <button
         type={type}
         title={title}
         className={classes}
         onClick={onClick}
      >
         {children}
      </button>
   );
}
