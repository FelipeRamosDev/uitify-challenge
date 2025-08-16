import { parseCSS } from '@/helpers/parse';
import styles from './Container.module.css';

// Types
import type { ComponentBaseProps } from '@/types/base.types';

export default function Container({ className, children }: ComponentBaseProps) {
   const classes = parseCSS(className, styles.Container);

   return (
      <div className={classes}>
         {children}
      </div>
   );
}
