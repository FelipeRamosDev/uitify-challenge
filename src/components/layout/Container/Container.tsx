import { parseCSS, parsePadding } from '@/helpers/parse';
import styles from './Container.module.css';

// Types
import type { ContainerProps } from './Container.types';

export default function Container({ padding = 'm', className, children }: ContainerProps) {
   const classes = parseCSS(className, [
      styles.Container,
      parsePadding(padding)
   ]);

   return (
      <div className={classes}>
         {children}
      </div>
   );
}
