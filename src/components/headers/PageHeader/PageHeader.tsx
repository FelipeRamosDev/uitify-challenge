import { parseCSS } from '@/helpers/parse';
import styles from './PageHeader.module.css'
import { Container } from '@/components/layout';
import type { PageHeaderProps } from './PageHeader.types';

export default function PageHeader({ title, className, children }: PageHeaderProps): React.JSX.Element {
   const classes = parseCSS(className, 'PageHeader');
   const headerContainerCSS = parseCSS(styles.headerContainer, [
      'flex',
      'flex-col',
      'md:flex-row',
      'items-center',
      'bg-primary-200',
      'rounded-lg',
      'px-10'
   ]);

   return (
      <div className={classes}>
         <Container className={headerContainerCSS}>
            <div className="flex-1 flex items-end md:items-start flex-col justify-end md:justify-start">
               <h1 className="text-2xl md:text-4xl">{title}</h1>
            </div>

            {children && <div className="flex-1 md:flex-0 flex items-start md:items-center">
               {children}
            </div>}
         </Container>
      </div>
   );
}
