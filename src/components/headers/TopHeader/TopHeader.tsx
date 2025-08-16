import UitifyLogo from '@/assets/uitify_logo_light.svg';
import styles from './TopHeader.module.css';
import { Container } from '@/components/layout';

export default function TopHeader(): React.JSX.Element {
   return (
      <header className={styles.TopHeader}>
         <Container className={[ 'flex', 'justify-between' ]}>
            <img
               className={styles.logo}
               src={UitifyLogo}
               alt="Uitify Logo"
            />
         </Container>
      </header>
   );
}
