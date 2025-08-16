import { parseCSS } from '@/helpers/parse';
import styles from './PageHeader.module.css'
import { Container } from '@/components/layout';
import type { PageHeaderProps } from './PageHeader.types';

export default function PageHeader({ title, description }: PageHeaderProps): React.JSX.Element {
   const headerContainerCSS = parseCSS(styles.headerContainer, [
      'flex',
      'items-center',
      'bg-primary-200',
      'rounded-lg',
      'px-10'
   ]);

   return (
      <div className="PageHeader">
         <Container className={headerContainerCSS}>
            <div className="flex-1">
               <h1>{title}</h1>
               {description && <p>{description}</p>}
            </div>
         </Container>
      </div>
   );
}
