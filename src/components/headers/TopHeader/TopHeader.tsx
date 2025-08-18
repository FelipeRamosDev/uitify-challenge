import UitifyLogo from '@/assets/images/uitify_logo_light.svg';
import { Container } from '@/components/layout';
import styles from './TopHeader.module.css';

export default function TopHeader(): React.JSX.Element {
   return (
      <header className={styles.TopHeader}>
         <Container className="flex items-center">
            <img
               className={styles.logo}
               src={UitifyLogo}
               alt="Uitify Logo"
            />
         </Container>
      </header>
   );
}
